var xhttpBTC = new XMLHttpRequest(); 
xhttpBTC.open('GET','https://api.coinmarketcap.com/v1/ticker/',true);
xhttpBTC.onreadystatechange = function(){
    if(xhttpBTC.readyState == 4){
        var info = JSON.parse(xhttpBTC.responseText);

        /* Storing different cyrptocurriences prices */
        //Bitcoin
        var btcRank = info[0].rank;
        var btcName = info[0].name;
        var btcPrice = parseFloat(info[0].price_usd).toFixed(2);
        var btcChange = info[0].percent_change_1h;
        //Ethereum
        var ethRank = info[1].rank;
        var ethName = info[1].name;
        var ethPrice = parseFloat(info[1].price_usd).toFixed(2);
        var ethChange = info[1].percent_change_1h;
        //XRP
        var xrpRank = info[2].rank;
        var xrpName = info[2].name;
        var xrpPrice = parseFloat(info[2].price_usd).toFixed(2);
        var xrpChange = info[2].percent_change_1h;
        //Bitcoin Cash
        var bchRank = info[3].rank;
        var bchName = info[3].name;
        var bchPrice = parseFloat(info[3].price_usd).toFixed(2);
        var bchChange = info[3].percent_change_1h;
        //EOS
        var eosRank = info[4].rank;
        var eosName = info[4].name;
        var eosPrice = parseFloat(info[4].price_usd).toFixed(2);
        var eosChange = info[4].percent_change_1h;
        //Stellar
        var xlmRank = info[5].rank;
        var xlmName = info[5].name;
        var xlmPrice = parseFloat(info[5].price_usd).toFixed(2);
        var xlmChange = info[5].percent_change_1h;
        //Litecoin
        var ltcRank = info[6].rank;
        var ltcName = info[6].name;
        var ltcPrice = parseFloat(info[6].price_usd).toFixed(2);
        var ltcChange = info[6].percent_change_1h;
        //Tether
        var usdtRank = info[7].rank;
        var usdtName = info[7].name;
        var usdtPrice = parseFloat(info[7].price_usd).toFixed(2);
        var usdtChange = info[7].percent_change_1h;
        //Cardano
        var adaRank = info[8].rank;
        var adaName = info[8].name;
        var adaPrice = parseFloat(info[8].price_usd).toFixed(2);
        var adaChange = info[8].percent_change_1h;
        //Monero
        var xmrRank = info[9].rank;
        var xmrName = info[9].name;
        var xmrPrice = parseFloat(info[9].price_usd).toFixed(2);
        var xmrChange = info[9].percent_change_1h;
        /*Displaying the corresponding USD values */
        //Bitcoin
        document.getElementById('btcRank').innerHTML=btcRank;
        document.getElementById('btcName').innerHTML=btcName;
        document.getElementById('btcPrice').innerHTML=btcPrice;
        if(btcChange<0){
            document.getElementById('btcChange').style.color="red";
            document.getElementById('btcChange').innerHTML=btcChange+" &#x25BC;";
        }else{
            document.getElementById('btcChange').style.color="#4CAF50";
            document.getElementById('btcChange').innerHTML=btcChange+" &#x25B2;";
        }
        //Ethereum
        document.getElementById('ethRank').innerHTML=ethRank;
        document.getElementById('ethName').innerHTML=ethName;
        document.getElementById('ethPrice').innerHTML=ethPrice;
        if(ethChange<0){
            document.getElementById('ethChange').style.color="red";
            document.getElementById('ethChange').innerHTML=ethChange+" &#x25BC;";
        }else{
            document.getElementById('ethChange').style.color="#4CAF50";
            document.getElementById('ethChange').innerHTML=ethChange+" &#x25B2;";
        }
        //XRP
        document.getElementById('xrpRank').innerHTML=xrpRank;
        document.getElementById('xrpName').innerHTML=xrpName;
        document.getElementById('xrpPrice').innerHTML=xrpPrice;
        if(xrpChange<0){
            document.getElementById('xrpChange').style.color="red";
            document.getElementById('xrpChange').innerHTML=xrpChange+" &#x25BC;";
        }
        else{
            document.getElementById('xrpChange').style.color="#4CAF50";
            document.getElementById('xrpChange').innerHTML=xrpChange+" &#x25B2;";
        }
        //Bitcoin Cash
        document.getElementById('bchRank').innerHTML=bchRank;
        document.getElementById('bchName').innerHTML=bchName;
        document.getElementById('bchPrice').innerHTML=bchPrice;
        if(bchChange<0){
            document.getElementById('bchChange').style.color="red";
            document.getElementById('bchChange').innerHTML=bchChange+" &#x25BC;";
        }
        else{
            document.getElementById('bchChange').style.color="#4CAF50";
            document.getElementById('bchChange').innerHTML=bchChange+" &#x25B2;";
        }
        //EOS
        document.getElementById('eosRank').innerHTML=eosRank;
        document.getElementById('eosName').innerHTML=eosName;
        document.getElementById('eosPrice').innerHTML=eosPrice;
        if(eosChange<0){
            document.getElementById('eosChange').style.color="red";
            document.getElementById('eosChange').innerHTML=eosChange+" &#x25BC;";
        }
        else{
            document.getElementById('eosChange').style.color="#4CAF50";
            document.getElementById('eosChange').innerHTML=eosChange+" &#x25B2;";
        }
        //Stellar
        document.getElementById('xlmRank').innerHTML=xlmRank;
        document.getElementById('xlmName').innerHTML=xlmName;
        document.getElementById('xlmPrice').innerHTML=xlmPrice;
        if(xlmChange<0){
            document.getElementById('xlmChange').style.color="red";
            document.getElementById('xlmChange').innerHTML=xlmChange+" &#x25BC;";
        }
        else{
            document.getElementById('xlmChange').style.color="#4CAF50";
            document.getElementById('xlmChange').innerHTML=xlmChange+" &#x25B2;";
        }
        //Litecoin
        document.getElementById('ltcRank').innerHTML=ltcRank;
        document.getElementById('ltcName').innerHTML=ltcName;
        document.getElementById('ltcPrice').innerHTML=ltcPrice;
        if(ltcChange<0){
            document.getElementById('ltcChange').style.color="red";
            document.getElementById('ltcChange').innerHTML=ltcChange+" &#x25BC;";
        }
        else{
            document.getElementById('ltcChange').style.color="#4CAF50";
            document.getElementById('ltcChange').innerHTML=ltcChange+" &#x25B2;";
        }
        //Tether
        document.getElementById('usdtRank').innerHTML=usdtRank;
        document.getElementById('usdtName').innerHTML=usdtName;
        document.getElementById('usdtPrice').innerHTML=usdtPrice;
        if(usdtChange<0){
            document.getElementById('usdtChange').style.color="red";
            document.getElementById('usdtChange').innerHTML=usdtChange+" &#x25BC;";
        }
        else{
            document.getElementById('usdtChange').style.color="#4CAF50";
            document.getElementById('usdtChange').innerHTML=usdtChange+" &#x25B2;";
        }
        //Cardano
        document.getElementById('adaRank').innerHTML=adaRank;
        document.getElementById('adaName').innerHTML=adaName;
        document.getElementById('adaPrice').innerHTML=adaPrice;
        if(adaChange<0){
            document.getElementById('adaChange').style.color="red";
            document.getElementById('adaChange').innerHTML=adaChange+" &#x25BC;";
        }
        else{
            document.getElementById('adaChange').style.color="#4CAF50";
            document.getElementById('adaChange').innerHTML=adaChange+" &#x25B2;";
        }
        //Monero
        document.getElementById('xmrRank').innerHTML=xmrRank;
        document.getElementById('xmrName').innerHTML=xmrName;
        document.getElementById('xmrPrice').innerHTML=xmrPrice;
        if(xmrChange<0){
            document.getElementById('xmrChange').style.color="red";
            document.getElementById('xmrChange').innerHTML=xmrChange+" &#x25BC;";
        }
        else{
            document.getElementById('xmrChange').style.color="#4CAF50";
            document.getElementById('xmrChange').innerHTML=xmrChange+" &#x25B2;";
        }
    }
};
xhttpBTC.send();