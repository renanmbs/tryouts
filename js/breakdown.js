
let keepers = ["Gustavo", "Bagley"];
let defenders = ["Gabe", "Belal", "Cooper", "Christian", "Ethan", "Damian", "Alex"];
let mids = ["Cache", "Wilo", "Riley", "Easton", "Boston", "Asher", "Michael Fuentes", "Abyiath", "Kolton Kitchin", "Adam Heald","Thomas Farr", "Pearce"];
let strikers = ["Humberto", "Ben"];
let practice = ["Lorenzo Venega", "Adam"];

document.getElementById("st").innerHTML = strikers.length;
document.getElementById("mid").innerHTML = mids.length;
document.getElementById("def").innerHTML = defenders.length;
document.getElementById("gk").innerHTML = keepers.length;
document.getElementById("practice").innerHTML = practice.length;
document.getElementById("total").innerHTML = strikers.length + mids.length + defenders.length + keepers.length;
document.getElementById("totalp").innerHTML = strikers.length + mids.length + defenders.length + keepers.length + practice.length;


let cams = ["Cache", "Riley", "Corbin", "Easton", "Pearce", "Michael Fuentes"];
let cms = ["Cache","Alex Gil", "Wilo", "Riley", "Easton", "Boston", "Gabe", "Michael Fuentes"];
let cdms = ["Alex Gil", "Wilo", "Boston", "Cooper", "Kolton", "Gabe"];
let cbs = ["Gabe", "Cooper","Kolton", "Damian", "Ethan Barnette"];
let obs = ["Gabe", "Belal", "Asher", "Christian", "Ethan Barnette","Cooper", "Alex Gil"];

let st_list = document.getElementById("sts");
let cam_list = document.getElementById("cams");
let cm_list = document.getElementById("cms");
let cdm_list = document.getElementById("cdms");
let cb_list = document.getElementById("cbs");
let ob_list = document.getElementById("obs");
let gk_list = document.getElementById("gks1");

const listST = strikers.map(item => {
  const li = document.createElement("li");
  li.textContent = item;
  return li;
});

listST.forEach(li => {
  st_list.appendChild(li);
});

const listCAMS = cams.map(item => {
    const li = document.createElement("li");
    li.textContent = item;
    return li;
  });
  
  listCAMS.forEach(li => {
    cam_list.appendChild(li);
  });

  const listCM = cms.map(item => {
    const li = document.createElement("li");
    li.textContent = item;
    return li;
  });
  
  listCM.forEach(li => {
    cm_list.appendChild(li);
  });

  const listCDM = cdms.map(item => {
    const li = document.createElement("li");
    li.textContent = item;
    return li;
  });
  
  listCDM.forEach(li => {
    cdm_list.appendChild(li);
  });

  const listCB = cbs.map(item => {
    const li = document.createElement("li");
    li.textContent = item;
    return li;
  });
  
  listCB.forEach(li => {
    cb_list.appendChild(li);
  });

  const listOB = obs.map(item => {
    const li = document.createElement("li");
    li.textContent = item;
    return li;
  });
  
  listOB.forEach(li => {
    ob_list.appendChild(li);
  });

  const listGK = keepers.map(item => {
    const li = document.createElement("li");
    li.textContent = item;
    return li;
  });
  
  listGK.forEach(li => {
    gk_list.appendChild(li);
  });

