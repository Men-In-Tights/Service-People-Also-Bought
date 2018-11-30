import { check, sleep } from "k6";
import http from "k6/http";

export let options = {

  stages: [
    { duration: "1m", target: 100 },
    { duration: "5m", target: 500 },
    { duration: "1m", target: 0 }
  ],

  discardResponseBodies: true,

  ext: {
    loadimpact: {
      distribution: {
        loadZoneLabel1: { loadZone: "amazon:us:ashburn", percent: 100 },
      }
    }
  }
};

export default function() {
  let res = http.get("http://localhost:3006/");

  check(res, {
      "is status 200": (r) => r.status === 200
  });

  sleep(3);
}