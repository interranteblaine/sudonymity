import { App, Stack, StackProps } from 'aws-cdk-lib';
import { DynamoStack } from './dynamo-stack';
import { S3Stack } from './s3-stack';
import {
  Runtime,
  IFunction,
  Function,
  AssetCode,
} from 'aws-cdk-lib/aws-lambda';

interface ServiceStackProps extends StackProps {
  dynamoStack: DynamoStack;
  s3Stack: S3Stack;
}

export class ServiceStack extends Stack {
  public readonly WebServiceFn: IFunction;

  constructor(scope: App, id: string, props?: ServiceStackProps) {
    super(scope, id, props);

    this.WebServiceFn = new Function(this, 'WebServiceFn', {
      runtime: Runtime.NODEJS_LATEST,
      code: new AssetCode('./dist/apps/web-service-fn'),
      handler: 'main.handler',
      environment: {
        TABLE_NAME: props.dynamoStack.table.tableName,
        BUCKET_NAME: props.s3Stack.bucket.bucketName,
      },
    });

    props.dynamoStack.table.grantReadWriteData(this.WebServiceFn);
    props.s3Stack.bucket.grantReadWrite(this.WebServiceFn);
  }
}
