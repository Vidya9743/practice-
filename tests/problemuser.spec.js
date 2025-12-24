import { test } from '@playwright/test';
import {problemUser} from '../pages/problemuser.pom.js';
import data from '../testdata/swaglabslogin.json' assert { type: 'json' };

let problemuser;

test("verify the problem user creds", async({page})=>{
problemuser=new problemUser(page)
await problemuser.launchUrl();
await problemuser.loginCreds(data.problemuser,data.password)
})
