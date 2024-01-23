import json
import boto3
dynamodb = boto3.resource('dynamodb')
table = dynamodb.Table('port_site')
def lambda_handler(event, context):
    response = table.get_item(Key={
        'id':'0'
    })
    views = response['Item'].get('views', 1)
    views = views + 1
    print(views)
    response = table.put_item(Item={
        'id':'0',
        'views' :views
    })
    
    return views