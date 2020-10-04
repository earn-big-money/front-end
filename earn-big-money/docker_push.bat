set /p imageId=imageId:

docker tag %imageId% ccr.ccs.tencentyun.com/ebm-client/ebm-client:latest && docker push ccr.ccs.tencentyun.com/ebm-client/ebm-client:latest

docker rmi $(docker images -q)
