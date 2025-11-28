import { test, expect } from '@playwright/test';
import { Loginpage } from '../../pages/orangeHRMlogin.pom';
import logindata from "../../testdata/logindata.json";
let login;

test.beforeEach("verifying buzz module in orange hrm" , async({page})=>{
login=new Loginpage(page);
await login.launchurl()
await login.loginwithcreds(logindata.username,logindata.password)
await login.verifydashboardurl()
})

test('verify buzz button', async({page})=>{
await login.buzzpage("Hello Buzz!", "testdata/upload.jpg");
});

test('verify vedio upload button', async({page})=>{
await login.videoupload("videouploaded", "https://youtu.be/sLX7zO-5XYc?si=0NhBn7kaz2OnBfRJ")
})