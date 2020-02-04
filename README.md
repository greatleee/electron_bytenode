# electron_bytenode

bytenode로 electron의 main process 코드를 바이너리(v8 engine bytecode)로 변환하여 코드를 보호하고
변환된 바이너리로 패키징했을 때 문제가 없는지 확인해보았다.

- electron
- electron builder
- [bytenode](https://github.com/OsamaAbbas/bytenode)

```bash
npm install
npm run pack

cd ./dist/mac/test.app/Contents/MacOS
./test # 앱 실행

# main process code 없이도 실행되는 것 확인
cd ../Resource/app
rm electron.js
cd ../../MacOS
./test
```


