 const path = require("path");
 const fs = require("fs");
const {randomInt} = require('crypto');
const random = randomInt(20);
 for (let i = 1; i <= 10; i++) {
  const random = randomInt(20); 

  for (let j = 0; j < random; j++) {
    const randomNum = Math.ceil((Math.random() * 10)); 
    fs.appendFileSync(
      path.join(__dirname, "text", `input${i}.txt`),
      `${randomNum}\n`
    );
  }
}
  const outPath = path.join(__dirname, "text", "output.txt");

  for (let k = 1; k <= 10; k++) {
    let num = []; // مصفوفة الأرقام المختارة
    const filePath = path.join(__dirname,"text", `input${k}.txt`);
    const fileContent = fs.readFileSync(filePath, "utf-8");

    // نقسم الأسطر بشكل متوافق مع الأنظمة المختلفة
    const lines = fileContent.trim().split(/\r?\n/);
    const selected = lines.slice(0, k); // نأخذ أول k أسطر

    // نحول كل سطر إلى رقم ونخزنهم في مصفوفة
    for (let m = 0; m < selected.length; m++) {
      if (selected[m]) {
        num.push(Number(selected[m]));
      }
    }

    // نضيف الأرقام إلى ملف الناتج
    fs.appendFileSync(outPath, `=== input${k}.txt ===\n`);
    fs.appendFileSync(outPath, num.join("\n") + "\n\n");
  }