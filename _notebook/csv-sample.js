const csv = require('csv')

const fs = require('fs');

const CSV_PATH = './event.log';

const COLUMNS = ["TimeCreated","Id","Message"];

const stream = fs.createReadStream(CSV_PATH, {encoding: 'utf-8'});
const parser = csv.parse({columns: COLUMNS, skip_empty_lines: true, from_line:2 });


async function summerize(lst){
    const STARTUP = '6005'
    const NORMAL_SHUTDOWN = '6006'
    const ABNORMAL_SHUTDOWN = '6008'
    const BOOTLOG = '6009'
    const LOGON = '7001'
    const LOGOFF = '7002'
    const STARTLOG = [STARTUP, LOGON, BOOTLOG]
    const SHUTDOWNLOG = [NORMAL_SHUTDOWN, ABNORMAL_SHUTDOWN, LOGOFF]
    console.log("------------- start summerize");
    dct = {};
    for(l in lst){
        time = lst[l]['TimeCreated'];
        date_str = time.split(" ")[0]
        log_id = lst[l]['Id'];
        if(STARTLOG.includes(log_id)){
            if(date_str in dct){
                if('start' in dct[date_str]){
                    dct[date_str]['start'] = time; // 更新
                } else {
                    dct[date_str]['start'] = time; // 更新
                    // dct[date_str] = {'start': time}; // 追加
                }
            } else {
                dct[date_str] = {};
                dct[date_str]['start'] = time; // 更新
            }
        }
        if(SHUTDOWNLOG.includes(log_id)){
            if(date_str in dct){
                if('end' in dct[date_str]){
                    null;
                    //dct[date_str]['end'] = time;
                } else {
                    dct[date_str]['end'] = time;
                }
            } else {
                dct[date_str] = {};
                dct[date_str]['end'] = time; // 更新
            }
        }
        
        if(l > 1000){
            console.log(dct);
            break;
        }
    }
}

async function process(){
    let lst = [];
    
    // read csv
    stream.pipe(parser);
    
    // parsing
    parser.on('readable', () => {
      var data;
      while (data = parser.read()) {
        lst.push(data);
      }
    });

    // if end
    parser.on('end', () => {
        summerize(lst)
    });

    // if error
    parser.on('error', () => {
      console.log("error have occuered");
    });
}

if (require.main === module) {
    console.log("------------- start");
    process();
    // console.log("------------- end"); // FIXME 同期して動作させる
}
