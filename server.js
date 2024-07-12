const inquirer = require('inquirer');
const qrcode = require('qrcode');
const path = require('path');

// Function to promt user input
const promtUser = async()=>{
    const answers = await inquirer.prompt([
        {
            type : 'input',
            name : 'data',
            message : 'Enter the data'
        },
    ]);
    return answers.data;
};

// Function to Generate QR Code
const generateQRCode = async(data) =>{
    try {
        const qrCodeImagePath = path.join(__dirname,`${data}.png`);
        await qrcode.toFile(qrCodeImagePath,data);
        console.log(`QR Code Generated & Saved as ${qrCodeImagePath}`);
    } catch (error) {
        console.error('Enter Generating QR Code: ',error);
    }
};

// Main Function
const main = async ()=>{
    const data = await promtUser();
    await generateQRCode(data);
};

//Run the Application
main();