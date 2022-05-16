const playwright = require("playwright");
const compareImages = require("resemblejs/compareImages");
const config = require("./config.json");
const fs = require("fs");

const ghostBefore = './screenshots/before/';
const ghostAfter = './screenshots/after/';
const ghostCompare = './screenshots/compare/';

const { viewportHeight, viewportWidth, browsers, options } = config;

async function executeTest() {
    if (!fs.existsSync(ghostCompare)) {
        fs.mkdirSync(ghostCompare);
    }

    let resultInfo = []
    let filesList = []
    let lEscenarios = []
    fs.readdirSync(ghostBefore).forEach(file => {
        if (file.includes(".txt")) {
            filesList.push(file)
        }
    });

    for (f of filesList) {
        let datetime = new Date().toISOString().replace(/:/g, ".");
        let result = {}
        result = await process(f);
        var scenario = f.replace(".txt", "")
        lEscenarios.push(scenario)

        fs.writeFileSync(`${ghostCompare}/report_${scenario}.html`, createReport(scenario, datetime, result));
    }

    fs.writeFileSync(`./screenshots/report.html`, createReport(lEscenarios));
    fs.copyFileSync('./index.css', `./screenshots/index.css`);


    //console.log(f);  
    //console.log(resultInfo);


    console.log(filesList)

    console.log('------------------------------------------------------------------------------------')
    console.log("Execution finished. Check the report under the ./screenshots/ghost folder")
    return ''; //resultInfo;  
}
(async () => console.log(await executeTest()))();

async function process(fileName) {
    var bef = readFile(ghostBefore + fileName).split('-');
    var aft = readFile(ghostAfter + fileName).split('-');
    //console.log(aft[0])
    let resultInfo = []

    if (bef[2] == aft[2]) {
        for (var i = 1; i <= bef[2]; i++) {
            const data = await compareImages(
                fs.readFileSync(`${ghostBefore}/${bef[0]}_${bef[1]}_paso_${i}.png`),
                fs.readFileSync(`${ghostAfter}/${aft[0]}_${aft[1]}_paso_${i}.png`),
                options
            );

            resultInfo[i] = {
                isSameDimensions: data.isSameDimensions,
                dimensionDifference: data.dimensionDifference,
                rawMisMatchPercentage: data.rawMisMatchPercentage,
                misMatchPercentage: data.misMatchPercentage,
                diffBounds: data.diffBounds,
                analysisTime: data.analysisTime,
                paso: i
            };

            fs.writeFileSync(`${ghostCompare}/${bef[0]}_${bef[1]}_paso_${i}.png`, data.getBuffer());
        }
        return resultInfo
    }
    else {
        console.log('Error en el numero de pasos')
    }

}

function readFile(file_path) {
    try {
        const data = fs.readFileSync(file_path, 'utf8')
        //console.log(data)
        return data
    } catch (err) {
        console.error(err)
        return ''
    }
}



function paso(b, info) {
    return `<div class=" browser" id="test0">
    <div class=" btitle">
        <h2>Paso: ${info.paso}</h2>
        <p>Data: ${JSON.stringify(info)}</p>
    </div>
    <div class="imgline">
      <div class="imgcontainer">
        <span class="imgname">Reference</span>
        <img class="img2" src="../before/${b}_paso_${info.paso}.png" id="refImage" label="Reference">
      </div>
      <div class="imgcontainer">
        <span class="imgname">Test</span>
        <img class="img2" src="../after/${b}_paso_${info.paso}.png" id="testImage" label="Test">
      </div>
    </div>
    <div class="imgline">
      <div class="imgcontainer">
        <span class="imgname">Diff</span>
        <img class="imgfull" src="./${b}_paso_${info.paso}.png" id="diffImage" label="Diff">
      </div>
    </div>
  </div>`
}

function createReport(scenario, datetime, resInfo) {
    return `
    <html>
        <head>
            <title> VRT Report </title>
            <link href="index.css" type="text/css" rel="stylesheet">
        </head>
        <body>
            <h1>Report for 
                 <a href="#"> ${scenario}</a>
            </h1>
            <p>Executed: ${datetime}</p>
            <div id="visualizer">
                  ${resInfo.map(b => paso(scenario, b))}
            </div>
        </body>
    </html>`
}
function createReport(list) {
    return `
    <html>
        <head>
            <title> VRT Report </title>
            <link href="index.css" type="text/css" rel="stylesheet">
        </head>
        <body>
            <h1>Report Ghost </h1>
            <div id="visualizer">
                  ${list.map(b => escenarios(b))}
            </div>
        </body>
    </html>`
}

function escenarios(e) {
    return `<div class=" browser" id="test0">
    <div class=" btitle">
        <h2> <a href="./compare/report_${e}.html"> ${e}</a></h2>
    </div>
  </div>`
}