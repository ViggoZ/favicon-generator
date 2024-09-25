import favicons from 'favicons';
import JSZip from 'jszip';

export async function generateFavicons(imageFile: File): Promise<Uint8Array> {
  try {
    const imageBuffer = await imageFile.arrayBuffer();

    const configuration = {
      path: "/",
      appName: "Favicon Generator",
      background: "#ffffff",
      theme_color: "#ffffff",
      display: "standalone",
      orientation: "portrait",
      version: "1.0",
      logging: true, // Enable logging
      icons: {
        android: true,
        appleIcon: true,
        appleStartup: false,
        favicons: true,
        windows: true,
        yandex: false,
      },
    };

    console.log('Starting favicon generation');
    const response = await favicons(Buffer.from(imageBuffer), configuration);
    console.log('Favicon generation completed');

    const zip = new JSZip();

    response.images.forEach((image) => {
      zip.file(image.name, image.contents);
    });

    response.files.forEach((file) => {
      zip.file(file.name, file.contents);
    });

    zip.file('favicon.html', response.html.join('\n'));

    console.log('Creating zip file');
    const zipContent = await zip.generateAsync({ type: 'uint8array' });
    console.log('Zip file created');

    return zipContent;
  } catch (error) {
    console.error('Error in generateFavicons:', error);
    throw error;
  }
}