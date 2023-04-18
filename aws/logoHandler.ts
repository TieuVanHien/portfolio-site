import { S3 } from 'aws-sdk';

exports.handler = async () => {
  const s3 = new S3({
    region: 'us-west-2'
  });

  try {
    const params = {
      Bucket: 'portfolio-site01',
      Key: 'logo.png'
    };

    const { Body } = await s3.getObject(params).promise();
    const image = Body.toString('base64');

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'image/png',
        'Content-Length': image.length.toString(),
      },
      isBase64Encoded: true,
      body: image
    };
  } catch (error) {
    console.error(error);

    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Error retrieving image' })
    };
  }
};
