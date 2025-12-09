import { test } from '@playwright/test';
import {lockedUser} from '../pages/Lockeduser.pom';
import data from '../testdata/swaglabslogin.json';

let lockeduserlogin;
test('verify the lockeduser', async({page})=>{
lockeduserlogin=new lockedUser(page);
await lockeduserlogin.launchurl();
await lockeduserlogin.lockedCreds(data.lockedusername , data.password)
await lockeduserlogin.verifyErrorMsg()
})

