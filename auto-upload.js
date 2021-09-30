const oScp = require('scp2')
const ssh2 = require('ssh2')

const argv = process.argv.splice(2)[1]

const localPath = './dist'

const testConfig = {
  host: '49.233.1.136',
  port: 22,
  username: 'root',
  password: '}g^;@UAd_T6!3nN',
  remotePath:'/opt/meitan/screen-web/dist'
}

const prodConfig = {
  host: '49.233.1.136',
  port: 22,
  username: 'root',
  password: '}g^;@UAd_T6!3nN',
  remotePath:'/opt/meitan/screen-web/dist'
}

let config = (argv === '-p' ? prodConfig : testConfig)

const conn = new ssh2.Client()

conn.on('ready', () => {
  conn.exec(`mv ${config.remotePath} ${config.remotePath}_${dateFtt('yyyy_MM_dd_hh_mm_ss', new Date())}_bak`, ( err, stream ) => {
    if (err) throw err;
    stream.on('close', () => {
      console.log('自动部署中...')
      oScp.scp(
        localPath,
        `${config.username}:${config.password}@${config.host}:${config.port}:${config.remotePath}`,
        (err) => {
          if (err) throw err
          console.log('自动部署完成')
        }
      )
      conn.end()
    })
    .on('data', () => {})
    .stderr.on('data', () => {})
  })
}).connect(config);

function dateFtt(fmt, date) {
  let o = {
    "M+" : date.getMonth()+1,                 //月份
    "d+" : date.getDate(),                    //日
    "h+" : date.getHours(),                   //小时
    "m+" : date.getMinutes(),                 //分
    "s+" : date.getSeconds(),                 //秒
    "q+" : Math.floor((date.getMonth()+3)/3), //季度
    "S"  : date.getMilliseconds()             //毫秒
  };
  if(/(y+)/.test(fmt))
    fmt = fmt.replace(RegExp.$1, (date.getFullYear()+"").substr(4 - RegExp.$1.length));
  for(let k in o)
    if(new RegExp("("+ k +")").test(fmt))
  fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));
  return fmt;
}
