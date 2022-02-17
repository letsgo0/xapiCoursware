<template>
  <el-button type="primary" @click="send">send</el-button>
</template>

<script lang='ts'>
import XAPI, { Statement } from "@xapi/xapi";
export default {
  setup() {
    function send() {
      const auth = `Basic ${btoa(
        "4f8cbb051ce732be931c8123f39dd2cfa061b25a" +
          ":" +
          "e33f148ed7f8ba84b48974cdfd7f7bcd3e0a7575"
      )}`;
      const xapi: XAPI = new XAPI("http://172.81.237.74/data/xAPI", auth);
      // const myStatement: Statement = { ... };

      // Send your statement
      // xapi.sendStatement(myStatement);
      const myStatement: Statement = {
        actor: {
          objectType: "Agent",
          name: "Test Agent",
          mbox: "mailto:hello@example.com",
        },
        verb: {
          id: "http://example.com/verbs/tested",
          display: {
            "en-GB": "tested",
          },
        },
        object: {
          objectType: "Activity",
          id: "https://github.com/xapijs/xapi",
        },
      };
      xapi.sendStatement(myStatement);
    }
    return {
      send,
    };
  },
};
</script>

<style scoped>
</style>