import AWS from 'aws-sdk';

const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
  region: 'us-west-2',
});

const bucketParams = {
  Bucket: 'portfolio-site01',
  Prefix: 'skills/'
};

s3.listObjects(bucketParams, (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data.Contents);
    // The Contents array contains the list of objects within the specified folder
  }
});
