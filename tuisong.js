// This file is auto-generated, don't edit it
import Util, * as $Util from '@alicloud/tea-util';
import dingtalkrobot_1_0, * as $dingtalkrobot_1_0 from '@alicloud/dingtalk/robot_1_0';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import * as $tea from '@alicloud/tea-typescript';


export default class Client {

  /**
   * 使用 Token 初始化账号Client
   * @return Client
   * @throws Exception
   */
  static createClient(): dingtalkrobot_1_0 {
    let config = new $OpenApi.Config({ });
    config.protocol = "https";
    config.regionId = "central";
    return new dingtalkrobot_1_0(config);
  }

  static async main(args: string[]): Promise<void> {
    let client = Client.createClient();
    let orgGroupSendHeaders = new $dingtalkrobot_1_0.OrgGroupSendHeaders({ });
    orgGroupSendHeaders.xAcsDingtalkAccessToken = "<your access token>";
    let orgGroupSendRequest = new $dingtalkrobot_1_0.OrgGroupSendRequest({
      msgParam: "{\"content\":\"今天吃肘子\"}",
      msgKey: "sampleText",
      openConversationId: "cid6KeBBLoveMJOGXoYKF5x7EeiodoA==",
      robotCode: "dingue4kfzdxbynxxxxxx",
      coolAppCode: "COOLAPP-1-101A83B831A5212Cxxxxxxxxxxx",
    });
    try {
      await client.orgGroupSendWithOptions(orgGroupSendRequest, orgGroupSendHeaders, new $Util.RuntimeOptions({ }));
    } catch (err) {
      if (!Util.empty(err.code) && !Util.empty(err.message)) {
        // err 中含有 code 和 message 属性，可帮助开发定位问题
      }

    }    
  }

}

Client.main(process.argv.slice(2));