import AWS from 'aws-sdk';

const s3 = new AWS.S3({
  accessKeyId: 'AKIA6LQCBBV3PECCAF3I',
  secretAccessKey: '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'
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
