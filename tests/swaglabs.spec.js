import { test} from '@playwright/test';
import {swagLabs} from '../pages/swaglabs.pom';
import data from "../testdata/swaglabslogin.json";
let swaglabslogin;

test.beforeEach(async({page})=>{
swaglabslogin=new swagLabs(page);
await swaglabslogin.launchUrl()
})

test('login with swaglabs user', async({page})=>{
await swaglabslogin.standardCreds(data.username,data.password)
await swaglabslogin.verifyPage()
await swaglabslogin.addtoCart()
await swaglabslogin.addtocartLogo()
await swaglabslogin.checkoutButton()

});