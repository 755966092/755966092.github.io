var request = require("request");
const lodash = require("lodash");
const moment = require("moment");

const addressList = [
  {
    count: 1,
    name: "18哥哥的小宝贝",
    address: "iaa1csec25xzn960zr83gr6rmy82awtdp079jsj8lx"
  },
  {
    count: 1,
    name: "quurhhpypc",
    address: "iaa1xvjpk9qesdp3cvc8g2a9s890kdty8fuhn9nhpf"
  },
  {
    count: 1,
    name: "阿明",
    address: "iaa1rngcqvc8vnjgqe4t00gklnka7lnjdy0hrq9x6u"
  },
  {
    count: 1,
    name: "吃大肉",
    address: "iaa1at4s35wd84j3s7469yutww30u9jav9tmjddg3j"
  },
  {
    count: 1,
    name: "o88225r4q7",
    address: "iaa1fy8t7ljw52dgg9u2yr9p80ax5qtlxj7v93scmn"
  },
  {
    count: 1,
    name: "悠然自在",
    address: "iaa143e3346lkpka705grhytx426n24www9xafgmt3"
  },
  {
    count: 1,
    name: "八月盛夏皆星河",
    address: "iaa1ls6kuykrumdz7ugra4kzq6z6sn7vxy4gaz7hzr"
  },
  {
    count: 1,
    name: "0f3aifctwn",
    address: "iaa1ygur93jm9suynuleteknl9wv9daw0u847fqde7"
  },
  {
    count: 1,
    name: "光头无能",
    address: "iaa1ycar3juhzu8mxd6tg0wrhg8q72hk42kpcv9suy"
  },
  {
    count: 1,
    name: "sfbvibdpkp",
    address: "iaa1vp2ya2c36rd630g5c3g0aucahhak7dcplc7tlv"
  },
  {
    count: 1,
    name: "小鸽",
    address: "iaa1df6mx5t70ujz7zlkgscfxx8nh7zvellypqf3k5"
  },
  {
    count: 1,
    name: "fsegbswnhdd",
    address: "iaa1hngmvefe6leg0cy3le9xn4h6aj6zll7us80urd"
  },
  {
    count: 1,
    name: "子瑜神",
    address: "iaa1jqcjw0uced2ghrlkljklt70vaaamq5qh8n6cqr"
  },
  {
    count: 1,
    name: "回",
    address: "iaa1rm5u9gdzywzm4g0y3fekhqewcgcll6pq7enw79"
  },
  {
    count: 1,
    name: "8lk9xmkzj0",
    address: "iaa16rvsc0tsp5vzp0x0f342fjts4zkmxyc3hqdzpl"
  },
  {
    count: 1,
    name: "85py9yhr1f",
    address: "iaa1vektz5955c4j46ty4pcmhvl6ftyhth8936zrcc"
  },
  {
    count: 1,
    name: "漫漫回本路",
    address: "iaa1njw27v5qk0xzgkehdc9pg8pcd4r98ddqz2g74n"
  },
  {
    count: 1,
    name: "天多",
    address: "iaa1fwntpynuzp29w74ferns2me72gl5rq94ez4zmk"
  },
  {
    count: 1,
    name: "清仓ib支持18",
    address: "iaa1p7892qsna7m9euygjwkg76lrdpwv3nxhs6qf3z"
  },
  {
    count: 1,
    name: "u2zjka5qqn",
    address: "iaa1lvqcsj56n5gqpsjhmn98kqqa374hnv7ngp0men"
  },
  {
    count: 1,
    name: "ig0bgj2gjf",
    address: "iaa1hjshx4ld37fjme90wnelqzln7q0lkrk4t2avqp"
  },
  {
    count: 1,
    name: "i41l0423uu",
    address: "iaa16ckc3v9w955n96anmpxet4jre5a05t4r0taxzg"
  },
  {
    count: 1,
    name: "十八",
    address: "iaa1nftng43ykhkq4jnp9h6yh9kp5hmd3d9emhfpga"
  },
  {
    count: 1,
    name: "冰块",
    address: "iaa174qy3k9utzpqu5fhk5ev28vr46xk43ph54fyza"
  },
  {
    count: 1,
    name: "老气球",
    address: "iaa1njgdyyzuk6p2gfnse5np9s6cqgahrkuyu0e2ka"
  },
  {
    count: 1,
    name: "大家",
    address: "iaa1mkrue5wk2mduuj69w6tzsusk08x4lved7xvjtw"
  },
  {
    count: 1,
    name: "艺术家",
    address: "iaa1wcwfrkqelkfg8j9zep5ctqh7xwklgvev9fc88u"
  },
  {
    count: 1,
    name: "送信人",
    address: "iaa17w4tn4kl93muxen7lnnua0e8jc9cdds69a8hdq"
  },
  {},
  {
    count: 1,
    name: "下一个ib",
    address: "iaa1njr862xv044mnfczv399lal9qdn732gp9ymvux"
  },
  {
    count: 1,
    name: "今年暴富在18",
    address: "iaa17u6e39u09r7e3uhk6a2r83wwqneg9wvnmyvqfl"
  },
  {
    count: 1,
    name: "宝宝熊",
    address: "iaa1a2nsksacx9zlxt3m98g8zg3ys4xc59eqvmr6rr"
  },
  {
    count: 1,
    name: "8kuv1olxtb",
    address: "iaa1936vty42htddu2xst5aval589wl020kw8dqq93"
  },
  {
    count: 1,
    name: "赵赚钱",
    address: "iaa1tna0xxvuc5uxxnm0ty8ze9s5dqrqv0n6ykyezw"
  },
  {
    count: 1,
    name: "叻叻叻",
    address: "iaa1aj3d520dazrlkhtvcneg669rjlqwjkkycrpwuj"
  },
  {
    count: 1,
    name: "2sp1c8cqnv",
    address: "iaa1m0rmls60uz5hcyhkq22sdrmctw0w2nuyrww3cn"
  },
  {
    count: 1,
    name: "mily94672h",
    address: "iaa1jusa9rkq27p5zahf4pa5lu78ju7lctkfkgvmaj"
  },
  {
    count: 1,
    name: "独白",
    address: "iaa15gp2p7e5wdquc7mg7wjf7a3udw03cpnylqy5fh"
  },
  {
    count: 1,
    name: "lky25kqrr0",
    address: "iaa1vh6h8j2ukee06zasl2eaka3h5fxemttskgf42x"
  },
  {
    count: 1,
    name: "666",
    address: "iaa1v42tr5dyqukrnssntdyjakye59y9jqgucn5mm8"
  },
  {
    count: 1,
    name: "卡布奇诺",
    address: "iaa170e29rzr0n7fe6p3n7nj0szrmrad0zu746dzhd"
  },
  {
    count: 1,
    name: "开心每一天",
    address: "iaa1jgzqhdfaj7ezsattzgurktwhtcc0nxt05j99tr"
  },
  {
    count: 1,
    name: "5qmkk3bv92",
    address: "iaa1l9q24gz65cpvknndveaf9xplhg7lqqfcxmhq3z"
  },
  {
    count: 1,
    name: "9kf965wem1",
    address: "iaa15y4rrfj2x57jv4ppc28k3se9m04lk0r6s2tldt"
  },
  {
    count: 1,
    name: "y2zuqe9x6x",
    address: "iaa14hxxtufmyx6w9jqnxlmd3nqqyw6mv26hj8lzr4"
  },
  {
    count: 1,
    name: "起飞:airplane_departure:",
    address: "iaa199df6lxagcsrgg2t23wzwws32maxs94xgk9hww"
  },
  {
    count: 1,
    name: "盈百万",
    address: "iaa1j57q66qgv5wll2gxppl9mzx89q73uep7sdzsgn"
  },
  {
    count: 1,
    name: "夏天",
    address: "iaa1we9t2dz3w29jr2pykz43em7s7r0q9hjtkfemqu"
  },
  {
    count: 1,
    name: "chillily",
    address: "iaa1zywkk9r0s84ze9uxynlld22xcaefj94mma0647"
  },
  {
    count: 1,
    name: "uec4a30ndk",
    address: "iaa1vrcc3fwc4gvvz8havu75xg0fzjdr77kckms5r9"
  },
  {
    count: 1,
    name: "保安团忠粉",
    address: "iaa1y3tjpw7ujkp0p6dmhadn7ra74yt6dv3ksv3ap0"
  },
  {
    count: 1,
    name: "鼓楼小王",
    address: "iaa1ysk7szyfx02hltksae9u30mvg0ncsawuhykszz"
  },
  {
    count: 1,
    name: "花花公子",
    address: "iaa1fwxgea4axqulf565ept57k6puqrlwpza50drqf"
  },
  {
    count: 1,
    name: "干黄牛的六子",
    address: "iaa1w7xpgqptqrwct03smnzz36dla5saek634h8wat"
  },
  {
    count: 1,
    name: "7kbs68jb65",
    address: "iaa1snk0td8lsrcrxuds4lvmawycjglv2qzthfgt5t"
  },
  {
    count: 1,
    name: "y5te2wpine",
    address: "iaa1f8h4jagnqz528shlhe76y8spquf6fj28pldk66"
  },
  {
    count: 1,
    name: "007",
    address: "iaa1u4symsrkxjzkq8fwnhma7nyrj0x3kwsvygfp8t"
  },
  {
    count: 1,
    name: "18才是我义父",
    address: "iaa1w5s9e6xfsdhzql9zqnyqqqwat52r2nrpteju2s"
  },
  {
    count: 1,
    name: "yskyf90a60",
    address: "iaa1q68ecqa76ukpy3n0jzwy9q2uremh7jtng865ct"
  },
  {
    count: 1,
    name: "魑魅魍魉魑魅魍魉",
    address: "iaa1f7yr5g89rt6mw27cvx6l5u4h24sa2jxfx633zj"
  },
  {
    count: 1,
    name: "凯撒",
    address: "iaa13pxwzjh564zzw6f2lk3vpq7sr5tzgvfmmy6gyr"
  },
  {
    count: 1,
    name: "木宝宝",
    address: "iaa1uguyz4zqpue9ksgqp3k42tny3wlzsppmhpg9w3"
  },
  {
    count: 1,
    name: "部长",
    address: "iaa1csw3vavnpchd5u4paxzs9wu9w4uddq0p467zxj"
  },
  {
    count: 1,
    name: "追风少年",
    address: "iaa1aja9nn5vn6kwk8hlea67eg3e6ueq6g559g6q29"
  },
  {
    count: 1,
    name: "qma1pce6h5",
    address: "iaa1td0vmnfa2t7733krlhnrstfd6kcmx6lcue098r"
  },
  {
    count: 1,
    name: "5h0vr3h66d",
    address: "iaa1c3p5jl6tzmg2az54yg98x05fqmw0hceau2f49j"
  },
  {
    count: 1,
    name: "二米阳光",
    address: "iaa1s6wddezmxdd4ct4gaynx9x8xsnggyhkdtvhhxg"
  },
  {
    count: 1,
    name: "巴菲特的眼睛",
    address: "iaa1ht7mtqm6336qwqwun54c6xzejq9asx9mlsv65m"
  },
  {
    count: 1,
    name: "八月花",
    address: "iaa14n5c963u9st0xghzaep84r790gyj3glsch8nsx"
  },
  {
    count: 1,
    name: "小木子",
    address: "iaa14ehjh8mlctjmue4rw0gjfqe3zwfexljekwzrhg"
  },
  {
    count: 1,
    name: "降龙18掌",
    address: "iaa1nj77spsr992v4mcmg6mzn6xfsslvfsqnsa7hmt"
  },
  {
    count: 1,
    name: "大韭菜",
    address: "iaa1qcyvsf72manztvnewd6hsgjcnhkcdupszx3xef"
  },
  {
    count: 1,
    name: "凛冬恋花",
    address: "iaa1ea68n7hr7fpxkazyhuuud2gd64wfz09yn7xwx3"
  },
  {
    count: 1,
    name: "ummxfbqiow",
    address: "iaa1cwhu8slfwxhzju5e72nr4jadnweqe2cvuxs69h"
  },
  {
    count: 1,
    name: "p4lxwtoaih",
    address: "iaa1kc87hp27fg8u2fct42upqzf9jpfrdu3e5qgvje"
  },
  {
    count: 1,
    name: "18哥牛的一逼",
    address: "iaa1xexc65x2mquwhx0ws24aht6462wrzlnqtpd3c3"
  },
  {
    count: 1,
    name: "十八起飞嘿嘿嘿",
    address: "iaa1gsdscu9dfm80afhqakyq2a3zjzukkc2sryym8k"
  },
  {
    count: 1,
    name: "十八数藏才是行业标杆",
    address: "iaa12zjnrjakmlqy74e425dg05306r69ardn9z68k0"
  },
  {
    count: 1,
    name: "00",
    address: "iaa1xcg7gj5ttr6qsktsy693e7n05w6uva6me2jaue"
  },
  {
    count: 1,
    name: "大乘",
    address: "iaa1g0ep6yc95p5m2lmqm2y5w7dj3cnghf2zee0mtz"
  },
  {
    count: 1,
    name: "nh954nkydz",
    address: "iaa1aawsahyfpwyjvjkl0s6962cnp3u2k9f2f4nlhv"
  },
  {
    count: 1,
    name: "润",
    address: "iaa17qv9jwgc6ksjmtm6arkzg8dwa0nsyqp5rv94x0"
  },
  {
    count: 1,
    name: "前期要贪，中期百分之70要果断，张张张张张",
    address: "iaa10yqwjlmw9haluhrrlmd0gyyg9ph2pm6yh9f5we"
  },
  {
    count: 1,
    name: "v1nuwfdt91",
    address: "iaa1dhdtvs77lsd87yhhyakxan3jwrn2zj0v43gkm0"
  },
  {
    count: 1,
    name: "camrg7ao62",
    address: "iaa1h9zrpgv387daszq9qwx8pavjcz07us9m5plxjr"
  },
  {
    count: 1,
    name: "别抄那么快",
    address: "iaa1pe8080w3s5eawgks32wvdtl23ey830zc4xdhyj"
  },
  {
    count: 1,
    name: "68tyfn8f7e",
    address: "iaa104t4xpvgf3rzqqfg8uyh2wl52w9nx6tgm6shah"
  },
  {
    count: 1,
    name: "果断有文化",
    address: "iaa1jpgrhgpm6ngztjxrz3n2zmd7t6zxsdu8kjjkly"
  },
  {
    count: 1,
    name: "闫琪爹",
    address: "iaa18ufaxc45tznxm4632tq5gze00ev427d5dt786f"
  },
  {
    count: 1,
    name: "秋天落叶纷飞",
    address: "iaa1gns8ygu0cm6fd7ehj3f30tdugeux4cv4qvu76t"
  },
  {
    count: 1,
    name: "一把老菜刀",
    address: "iaa17kahdtyxt40de2drjhc96sec8dgg7a95e2ykmx"
  },
  {
    count: 1,
    name: "yo2kpp82n2",
    address: "iaa16gh7eteah7haan5uyvdslyc88sj82d0ehexea5"
  },
  {
    count: 1,
    name: "x\u2006x\u2006x\u2006d\u2006h\u2006",
    address: "iaa13kuez7pu4gdhnnhfs8tllxgjuflp4tp4f600sf"
  },
  {
    count: 1,
    name: "南",
    address: "iaa1h5tqz0tv4spkr7dls27ghdc9yuw5wec3ka9xd7"
  },
  {
    count: 1,
    name: "221tjomfzz",
    address: "iaa1ug28ulcr6mnvvscmetj0c568mzmnrgp0k6kcmq"
  },
  {
    count: 1,
    name: "枪不准还怕死",
    address: "iaa17utawx6j87t2an9ust2sz8p2el6h9vyp25cwrw"
  },
  {
    count: 1,
    name: "18哥我来了",
    address: "iaa1zq70jmm90mjsn9x5pg04x45q978quqdgvywe4d"
  },
  {
    count: 1,
    name: "不能再割一次吧",
    address: "iaa1am0qdfcc7xfxz7ql4gg69vej9prxwqqxdgwgpj"
  },
  {
    count: 1,
    name: "海螺:spiral_shell:",
    address: "iaa1ppqjprmqztnkqe6vw4m45f4u6cex3nrjasfjga"
  },
  {
    count: 1,
    name: "美少女郭德纲",
    address: "iaa13ayhqydp7g9vcaejsxehrunqxyrc552jx6xl4p"
  },
  {
    count: 1,
    name: "0cbx0w6ce7",
    address: "iaa14vw0teltfglqpcj22l9u3w65xkach035qp7rkk"
  },
  {
    count: 1,
    name: "蠢哭了",
    address: "iaa176l28uhx3xm2xaf87ulktzc5ust95f20u6tjn3"
  },
  {
    count: 1,
    name: "fbwna2ajui",
    address: "iaa1apgjgapyz3wucp42fns53nmqd52vgwatejnw4j"
  },
  {
    count: 1,
    name: "小镰刀",
    address: "iaa1czt98gzqgp5f9zzjuxp9s7dvfmfv262mjfg9dn"
  },
  {
    count: 1,
    name: "l3vpw5nh5u",
    address: "iaa19wmpe9xftkt5ctr944y9vx06xzlczwnzt3k8lg"
  },
  {
    count: 1,
    name: "m467jqwy31",
    address: "iaa13qrwavscft4cx95qp4sef8tuwah7ursl2ernas"
  },
  {
    count: 1,
    name: "光头佬是傻diao",
    address: "iaa17j4exwjcgfk7radef2tz5r2xtsk34khxhj5cps"
  },
  {
    count: 1,
    name: "cwotxzimvv",
    address: "iaa1v7pu8lkxmq2xcwayewp6mq37zx2n05crhau0vq"
  },
  {
    count: 1,
    name: "07uxqum8b4",
    address: "iaa1q96r9y8yfaazfjurtvhdkh3fulnxpagrhyqxwp"
  },
  {
    count: 1,
    name: "132296",
    address: "iaa1ywsvjfeem22we2tkh28fx6tzx4y4gqf5lt4xlu"
  },
  {
    count: 1,
    name: "18哥带我飞",
    address: "iaa18cm240jzzn9yql9qa08rpexkms7keycynmj0s7"
  },
  {
    count: 1,
    name: "Aven",
    address: "iaa1fxax8vf4gxy0ng5h5nl2yfm5j2puy6c32lane5"
  },
  {
    count: 1,
    name: "恍若青阳",
    address: "iaa170s023tr2e5qpqmgplgpl9d936ejmsz4efpmvh"
  },
  {
    count: 1,
    name: "小辫子1983",
    address: "iaa1jl2lhjkqzv9ax5lx89f5tjljzyslucav2nmkvv"
  },
  {
    count: 1,
    name: "飘洋过海来看你",
    address: "iaa14ejxw6rtkv2yyu0eymjtgx9cm9cmas3j6e8gp2"
  },
  {
    count: 1,
    name: "就赚个猪脚饭",
    address: "iaa1w5efmcev96y49pgq6af9sld83cphqd03sm99zh"
  },
  {
    count: 1,
    name: "903i3y097k",
    address: "iaa1ftzztrkuhewkxx88js9rhl0dyee3f9g4dwswpf"
  },
  {
    count: 1,
    name: "梭哈大王123",
    address: "iaa1u8jyfnhzlcdfr6hdr9t2egt4wsv398z7uwvp7j"
  },
  {
    count: 1,
    name: "盒子哥",
    address: "iaa1u0j44lcez8x88y9yeejg7ntpq6083gj7efqry4"
  },
  {
    count: 1,
    name: "jgqq3p4lal",
    address: "iaa1y5502dnalkq3j5697kag8xwj2v0zq6237s3wmg"
  },
  {
    count: 1,
    name: "zq110tallu",
    address: "iaa1k99wh4pnzymp58kjxtr3pwrpewzjl5lvyu5ha6"
  }
];
var addressData = {};
let getFlag = true;

var i = 0;
const sleep = (ms) =>
  new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
var num = 1;
console.log("开始...");

setTimeout(() => {
  console.log("重启服务...");
  throw "测试错误";
}, 1800000);

(async () => {
  try {
    getDate(addressList[i]);
  } catch (error) {}
})();

// iaa1thp0uyk72vu8uhxjmygxm0xphfs99jzcpkl23u   官方地址
function getDate(params) {
  if (getFlag) {
    getFlag = false;
    request(
      {
        url: `https://explorer.wenchang.bianjie.ai/api/txs/addresses?address=${params.address}&type=issue_denom,transfer_denom,mint_nft,edit_nft,transfer_nft,burn_nft&useCount=false&countMsg=false&pageNum=1&pageSize=5`,
        // url: `https://explorer.wenchang.bianjie.ai/api/nfts?denomId=&nftId=&owner=iaa1p7vrfx7ytqqgyd2g8ulwhpu42nmaqt0dkxmcwx&pageNum=1&pageSize=5`,
        // url: `https://api.hecoinfo.com/api?module=account&action=tokennfttx&address=${params.address.toLowerCase()}&page=1&offset=10&sort=desc`,
        headers: {
          "content-type": "application/json"
        }
      },

      async function (error, response, body) {
        getFlag = true;
        try {
          if (error) {
            getDate(addressList[i]);
            console.log("错误一次:", JSON.stringify(error));
          }
          let bodyData = JSON.parse(body).data.data;
          console.log("------------------------------------------------");
          console.log("用户: ", params.name);
          console.log("数据详情: ", bodyData[0].msgs[0].msg.name);

          // // tokenID
          console.log(
            "请求次数:",
            num++,
            " -- ",
            moment().format("MM-DD HH:mm:ss")
          );
          console.log("------------------------------------------------");
          if (i < addressList.length - 1) {
            i++;
          } else {
            i = 0;
          }
          await sleep(500);
          getDate(addressList[i]);

          // console.log('addressData: ', JSON.stringify(addressData));
          if (addressData[params.address]) {
            let diff = [];
            if (
              bodyData.length == 5 &&
              addressData[params.address].length == 5
            ) {
              diff = lodash.differenceBy(
                bodyData,
                addressData[params.address],
                "time"
              );
            }
            if (diff.length > 0) {
              console.log(
                "-----------------------------------------不同-不同-不同-不同-不同-不同-不同-不同------------------------------------------------: ",
                diff
              );
              // 有新交易
              addressData[params.address] = bodyData;
              sendDDNews(diff, params);
            } else {
              addressData[params.address] = bodyData;
            }
          } else {
            addressData[params.address] = bodyData;
          }
        } catch (error) {
          getDate(addressList[i]);
        }
      }
    );
  }
}

function sendDDNews(diff, params) {
  let ids = [];
  // iaa1thp0uyk72vu8uhxjmygxm0xphfs99jzcpkl23u
  diff.forEach((item) => {
    var aaaaaaaa = {
      title: "新交易提醒：",
      text: ""
    };
    const time = moment(item.time * 1000).format("MM-DD HH:mm:ss");
    aaaaaaaa.title += params.name;
    let type = "";
    if (item.msgs[0].msg.recipient == params.address) {
      type = "买入";
    } else if (item.to === "0x0000000000000000000000000000000000000000") {
      type = "销毁";
    } else {
      type = "卖出";
    }
    const ele = item.msgs[0].msg;
    aaaaaaaa.text = `## ${params.name} \n- 18数藏交易 \n- 商品：${ele.name} \n- 类型：${type} \n- 时间：${time} \n- ID: ${ele.id}}`;
    sendNews(aaaaaaaa, params);
  });
}

function sendNews(news, params) {
  let noall = [
    // "0x3342572427e79309071b43368cc7976e5c627a12",
  ];
  if (noall.indexOf(params.address) == -1) {
    sendNews2(news);
    sendNews3(news);
  }
  request(
    {
      url: "https://oapi.dingtalk.com/robot/send?access_token=febedf3f0da93b332c18b7b34926a82fd1bbb3474b5372417b2a1e83cf6ad180", //请求路径
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({
        msgtype: "markdown",
        markdown: news
      })
    },
    function (error, response, body) {
      if (!error && response.statusCode == 200) {
      }
    }
  );
}

function sendNews2(news) {
  request(
    {
      url: "https://oapi.dingtalk.com/robot/send?access_token=d728f7912c9fe66fe78679ed4ccd046a37c6273c30839fbb7b9b01f15dba832e", //请求路径
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      // body: JSON.stringify({ msgtype: "markdown", text: { content: news } })
      body: JSON.stringify({
        msgtype: "markdown",
        markdown: news
      })
      // body: JSON.stringify({ msgtype: "text", text: { content: news } })
    },
    function (error, response, body) {
      if (!error && response.statusCode == 200) {
      }
    }
  );
}

// 新老监控群
function sendNews3(news) {
  request(
    {
      url: "https://oapi.dingtalk.com/robot/send?access_token=efaeda965fb6a4f4742cd5c29e4f8a72c7bd7df5502ef77aa4ba2e6340b50391", //请求路径
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({
        msgtype: "markdown",
        markdown: news
      })
    },
    function (error, response, body) {
      if (!error && response.statusCode == 200) {
      }
    }
  );
}
