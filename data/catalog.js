// Vintage Disney programming only. Classic television entries use official
// Disney Kids / Disney Channel Animation uploads. The schedule excludes post-2000 shows.
(function () {
  "use strict";
  const rows = [["Catteries Not Included",1989,"Rescue Rangers","EerzzZO3MyY",1320],["Flash the Wonder Dog",1989,"Rescue Rangers","WliAioYz83U",1320],["Parental Discretion Retired",1989,"Rescue Rangers","oWVwOSQD18w",1320],["A Case of Stageblight",1989,"Rescue Rangers","eQ3fYwQFHeU",1320],["A Wolf in Cheap Clothing",1989,"Rescue Rangers","_JI1MPpCDh0",1320],["Robocat",1989,"Rescue Rangers","p9GTSkpF5FY",1320],["Prehysterical Pet",1989,"Rescue Rangers","uvfVWCNaLFE",1320],["Zipper Come Home",1990,"Rescue Rangers","3y-MgQJCSCY",1320],["A Fly in the Ointment",1990,"Rescue Rangers","bKurfUtstTI",1320],["A Chorus Crime",1990,"Rescue Rangers","8mTiqrzSRz4",1320],["The Great Maxini",1992,"Goof Troop","YnP1rzKLTQA",1320],["Goofy Gets Pranked",1992,"Goof Troop","YH4mm60zM-4",240],["Pete and Goofy's BBQ Chaos",1992,"Goof Troop","5K7MQbFU7iE",240],["Goofy Fixes Up His Home",1992,"Goof Troop","Yfw3afCmm2A",240],["Goofy Goes on a Blind Date",1992,"Goof Troop","0CyvmSi8SkQ",240],["Goofy and Pete's Camping Chaos",1992,"Goof Troop","VbQieDZzqYc",240],["Goofy and Pete Go on a Ski Trip",1992,"Goof Troop","1CEAZsevPoc",257],["Steamboat Willie",1928,"Mickey Mouse","I5pG1wbRKOg",450]];
  window.HERMIT_CATALOG = rows.map((row,index) => ({
    id:`DISNEY-${String(index + 1).padStart(3,"0")}`,
    title:row[0], year:row[1], collection:`${row[2]} · Vintage Disney`,
    videoId:row[3], runtimeSeconds:row[4], cleared:true
  }));
  window.DISNEY_VAULT = ["Mickey Mouse","Donald Duck","Goofy","Goof Troop","Chip ’n Dale Rescue Rangers","The Disney Afternoon","Silly Symphonies","Wonderful World of Disney","ABC Disney movies","Classic animation","Vintage family films","Disney television"];
  window.HERMIT_COMMERCIALS = [];
  window.INFINITY_CHANNEL = {id:"DISNEY",name:"Disney Vintage",era:"1928–2000"};
})();