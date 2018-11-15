# aws-cutecat

[![serverless](http://public.serverless.com/badges/v3.svg)](http://www.serverless.com)

Simple gif provider powered by [giphy.com](https://giphy.com)

## Demo

[Link to Demo](https://r5zqxwssle.execute-api.us-east-1.amazonaws.com/dev/)

## Setup

### Install serverless

```
$ npm i -g serverless
```

### Setup giphy api

`.api.json`
```json
{
	"key": "<giphy_api_key>"
}
```

### Run local

```shell
$ npm run local
```

### Deploy to AWS

`~/.aws/credentials`
```ini
[cutecat]
aws_access_key_id = <acces_key>
aws_secret_access_key = <secret>
```
or
```shell
$ sls config credentials -p aws -k <access_key> -s <secret> -n cutecat
```
  
```shell
$ npm i
$ npm run deploy
```