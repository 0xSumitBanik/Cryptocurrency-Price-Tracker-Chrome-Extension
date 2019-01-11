var xhttpBTC = new XMLHttpRequest(); 
xhttpBTC.open('GET','https://api.coinmarketcap.com/v1/ticker/',true);
xhttpBTC.onreadystatechange = function()
{
    if(xhttpBTC.readyState == 4)
    {
        var info = JSON.parse(xhttpBTC.responseText);

        /* Storing different cyrptocurriences prices */
        //1stCoin
        var Rank1 = info[0].rank;
        var Name1 = info[0].name;
        var Price1 = parseFloat(info[0].price_usd).toFixed(2);
        var priceBTC1 = parseFloat(info[0].price_btc).toFixed(8);
        var Change1 = info[0].percent_change_1h;
        //2ndCoin
        var Rank2 = info[1].rank;
        var Name2 = info[1].name;
        var Price2 = parseFloat(info[1].price_usd).toFixed(2);
        var priceBTC2 = parseFloat(info[1].price_btc).toFixed(8);
        var Change2 = info[1].percent_change_1h;
        //3rdCoin
        var Rank3 = info[2].rank;
        var Name3 = info[2].name;
        var Price3 = parseFloat(info[2].price_usd).toFixed(2);
        var priceBTC3 = parseFloat(info[2].price_btc).toFixed(8);
        var Change3 = info[2].percent_change_1h;
        //4thCoin
        var Rank4 = info[3].rank;
        var Name4 = info[3].name;
        var Price4 = parseFloat(info[3].price_usd).toFixed(2);
        var priceBTC4 = parseFloat(info[3].price_btc).toFixed(8);
        var Change4 = info[3].percent_change_1h;
        //5thCoin
        var Rank5 = info[4].rank;
        var Name5 = info[4].name;
        var Price5 = parseFloat(info[4].price_usd).toFixed(2);
        var priceBTC5 = parseFloat(info[4].price_btc).toFixed(8);
        var Change5 = info[4].percent_change_1h;
        //6thCoin
        var Rank6 = info[5].rank;
        var Name6 = info[5].name;
        var Price6 = parseFloat(info[5].price_usd).toFixed(2);
        var priceBTC6 = parseFloat(info[5].price_btc).toFixed(8);
        var Change6 = info[5].percent_change_1h;
        //7thCoin
        var Rank7 = info[6].rank;
        var Name7 = info[6].name;
        var Price7 = parseFloat(info[6].price_usd).toFixed(2);
        var priceBTC7 = parseFloat(info[6].price_btc).toFixed(8);
        var Change7 = info[6].percent_change_1h;
        //8thCoin
        var Rank8 = info[7].rank;
        var Name8 = info[7].name;
        var Price8 = parseFloat(info[7].price_usd).toFixed(2);
        var priceBTC8 = parseFloat(info[7].price_btc).toFixed(8);
        var Change8 = info[7].percent_change_1h;
        //9thCoin
        var Rank9 = info[8].rank;
        var Name9 = info[8].name;
        var Price9 = parseFloat(info[8].price_usd).toFixed(2);
        var priceBTC9 = parseFloat(info[8].price_btc).toFixed(8);
        var Change9 = info[8].percent_change_1h;
        //10thCoin
        var Rank10 = info[9].rank;
        var Name10 = info[9].name;
        var Price10 = parseFloat(info[9].price_usd).toFixed(2);
        var priceBTC10 = parseFloat(info[9].price_btc).toFixed(8);
        var Change10 = info[9].percent_change_1h;

        var Rank = [Rank1,Rank2,Rank3,Rank4,Rank5,Rank6,Rank7,Rank8,Rank9,Rank10];
        var Name = [Name1,Name2,Name3,Name4,Name5,Name6,Name7,Name8,Name9,Name10];
        var Price = [Price1,Price2,Price3,Price4,Price5,Price6,Price7,Price8,Price9,Price10];
        var Change = [Change1,Change2,Change3,Change4,Change5,Change6,Change7,Change8,Change9,Change10];
        var priceBTC = [priceBTC1,priceBTC2,priceBTC3,priceBTC4,priceBTC5,priceBTC6,priceBTC7,priceBTC8,priceBTC9,priceBTC10];
        var childRank = new Array(); var childName = new Array(); var childPrice = new Array();  var childChange = new Array();

        for(let i=0;i<10;i++)
        {
            childRank[i] = ctn(Rank[i]);
            childName[i] = ctn(Name[i]);
            childPrice[i] = ctn(Price[i]);
            childChange[i] = ctn(Change[i]);
        }
        
        //1stCoin
      
        $('Rank1').appendChild(childRank[0]);
        $('Name1').appendChild(childName[0]);
        $('Price1').appendChild(childPrice[0]);
        if(Change1<0)
        {
            $('Change1').style.color="red";
            $('Change1').appendChild(childChange[0]);
            $('Change1').appendChild(ctn(" ▼"));
        }
        else
        {
            $('Change1').style.color="#4CAF50";
            $('Change1').appendChild(childChange[0]);
            $('Change1').appendChild(ctn(" ▲"));
        }
        //2ndCoin

        $('Rank2').appendChild(childRank[1]);
        $('Name2').appendChild(childName[1]);
        $('Price2').appendChild(childPrice[1]);
        if(Change2<0)
        {
            $('Change2').style.color="red";
            $('Change2').appendChild(childChange[1]);
            $('Change2').appendChild(ctn(" ▼"));
        }
        else
        {
            $('Change2').style.color="#4CAF50";
            $('Change2').appendChild(childChange[1]);
            $('Change2').appendChild(ctn(" ▲"));
        }

        //3rdCoin
        $('Rank3').appendChild(childRank[2]);
        $('Name3').appendChild(childName[2]);
        $('Price3').appendChild(childPrice[2]);
        if(Change3<0)
        {
            $('Change3').style.color="red";
            $('Change3').appendChild(childChange[2]);
            $('Change3').appendChild(ctn(" ▼"));
        }
        else
        {
            $('Change3').style.color="#4CAF50";
            $('Change3').appendChild(childChange[2]);
            $('Change3').appendChild(ctn(" ▲"));
        }
        //4thCoin
        $('Rank4').appendChild(childRank[3]);
        $('Name4').appendChild(childName[3]);
        $('Price4').appendChild(childPrice[3]);
        if(Change4<0)
        {
            $('Change4').style.color="red";
            $('Change4').appendChild(childChange[3]);
            $('Change4').appendChild(ctn(" ▼"));
        }
        else
        {
            $('Change4').style.color="#4CAF50";
            $('Change4').appendChild(childChange[3]);
            $('Change4').appendChild(ctn(" ▲"));
        }

        //5thCoin
        $('Rank5').appendChild(childRank[4]);
        $('Name5').appendChild(childName[4]);
        $('Price5').appendChild(childPrice[4]);
        if(Change5<0)
        {
            $('Change5').style.color="red";
            $('Change5').appendChild(childChange[4]);
            $('Change5').appendChild(ctn(" ▼"));
        }
        else
        {
            $('Change5').style.color="#4CAF50";
            $('Change5').appendChild(childChange[4]);
            $('Change5').appendChild(ctn(" ▲"));
        }

        //6thCoin
        $('Rank6').appendChild(childRank[5]);
        $('Name6').appendChild(childName[5]);
        $('Price6').appendChild(childPrice[5]);
        if(Change6<0)
        {
            $('Change6').style.color="red";
            $('Change6').appendChild(childChange[5]);
            $('Change6').appendChild(ctn(" ▼"));
        }
        else
        {
            $('Change6').style.color="#4CAF50";
            $('Change6').appendChild(childChange[5]);
            $('Change6').appendChild(ctn(" ▲"));
        }


        //7thCoin
        $('Rank7').appendChild(childRank[6]);
        $('Name7').appendChild(childName[6]);
        $('Price7').appendChild(childPrice[6]);
        if(Change7<0)
        {
            $('Change7').style.color="red";
            $('Change7').appendChild(childChange[6]);
            $('Change7').appendChild(ctn(" ▼"));
        }
        else
        {
            $('Change7').style.color="#4CAF50";
            $('Change7').appendChild(childChange[6]);
            $('Change7').appendChild(ctn(" ▲"));
        }


        //8thCoin
        $('Rank8').appendChild(childRank[7]);
        $('Name8').appendChild(childName[7]);
        $('Price8').appendChild(childPrice[7]);
        if(Change8<0)
        {
            $('Change8').style.color="red";
            $('Change8').appendChild(childChange[7]);
            $('Change8').appendChild(ctn(" ▼"));
        }
        else
        {
            $('Change8').style.color="#4CAF50";
            $('Change8').appendChild(childChange[7]);
            $('Change8').appendChild(ctn(" ▲"));
        }



        //9thCoin
        $('Rank9').appendChild(childRank[8]);
        $('Name9').appendChild(childName[8]);
        $('Price9').appendChild(childPrice[8]);
        if(Change9<0)
        {
            $('Change9').style.color="red";
            $('Change9').appendChild(childChange[8]);
            $('Change9').appendChild(ctn(" ▼"));
        }
        else
        {
            $('Change9').style.color="#4CAF50";
            $('Change9').appendChild(childChange[8]);
            $('Change9').appendChild(ctn(" ▲"));
        }



        //10thCoin
        $('Rank10').appendChild(childRank[9]);
        $('Name10').appendChild(childName[9]);
        $('Price10').appendChild(childPrice[9]);
        if(Change10<0)
        {
            $('Change10').style.color="red";
            $('Change10').appendChild(childChange[9]);
            $('Change10').appendChild(ctn(" ▼"));
        }
        else
        {
            $('Change10').style.color="#4CAF50";
            $('Change10').appendChild(childChange[9]);
            $('Change10').appendChild(ctn(" ▲"));
        }
    }
    
}


function $(id)
{
    return document.getElementById(id);
};

function ctn(text)
{
    return document.createTextNode(text);
};
    
xhttpBTC.send();
