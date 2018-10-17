function $(id){
    return document.getElementById(id);
}
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
        $('btcRank').innerHTML=btcRank;
        $('btcName').innerHTML=btcName;
        $('btcPrice').innerHTML=btcPrice;
        if(btcChange<0){
            $('btcChange').style.color="red";
            $('btcChange').innerHTML=btcChange+" &#x25BC;";
        }else{
            $('btcChange').style.color="#4CAF50";
            $('btcChange').innerHTML=btcChange+" &#x25B2;";
        }
        //Ethereum
        $('ethRank').innerHTML=ethRank;
        $('ethName').innerHTML=ethName;
        $('ethPrice').innerHTML=ethPrice;
        if(ethChange<0){
            $('ethChange').style.color="red";
            $('ethChange').innerHTML=ethChange+" &#x25BC;";
        }else{
            $('ethChange').style.color="#4CAF50";
            $('ethChange').innerHTML=ethChange+" &#x25B2;";
        }
        //XRP
        $('xrpRank').innerHTML=xrpRank;
        $('xrpName').innerHTML=xrpName;
        $('xrpPrice').innerHTML=xrpPrice;
        if(xrpChange<0){
            $('xrpChange').style.color="red";
            $('xrpChange').innerHTML=xrpChange+" &#x25BC;";
        }
        else{
            $('xrpChange').style.color="#4CAF50";
            $('xrpChange').innerHTML=xrpChange+" &#x25B2;";
        }
        //Bitcoin Cash
        $('bchRank').innerHTML=bchRank;
        $('bchName').innerHTML=bchName;
        $('bchPrice').innerHTML=bchPrice;
        if(bchChange<0){
            $('bchChange').style.color="red";
            $('bchChange').innerHTML=bchChange+" &#x25BC;";
        }
        else{
            $('bchChange').style.color="#4CAF50";
            $('bchChange').innerHTML=bchChange+" &#x25B2;";
        }
        //EOS
        $('eosRank').innerHTML=eosRank;
        $('eosName').innerHTML=eosName;
        $('eosPrice').innerHTML=eosPrice;
        if(eosChange<0){
            $('eosChange').style.color="red";
            $('eosChange').innerHTML=eosChange+" &#x25BC;";
        }
        else{
            $('eosChange').style.color="#4CAF50";
            $('eosChange').innerHTML=eosChange+" &#x25B2;";
        }
        //Stellar
        $('xlmRank').innerHTML=xlmRank;
        $('xlmName').innerHTML=xlmName;
        $('xlmPrice').innerHTML=xlmPrice;
        if(xlmChange<0){
            $('xlmChange').style.color="red";
            $('xlmChange').innerHTML=xlmChange+" &#x25BC;";
        }
        else{
            $('xlmChange').style.color="#4CAF50";
            $('xlmChange').innerHTML=xlmChange+" &#x25B2;";
        }
        //Litecoin
        $('ltcRank').innerHTML=ltcRank;
        $('ltcName').innerHTML=ltcName;
        $('ltcPrice').innerHTML=ltcPrice;
        if(ltcChange<0){
            $('ltcChange').style.color="red";
            $('ltcChange').innerHTML=ltcChange+" &#x25BC;";
        }
        else{
            $('ltcChange').style.color="#4CAF50";
            $('ltcChange').innerHTML=ltcChange+" &#x25B2;";
        }
        //Tether
        $('usdtRank').innerHTML=usdtRank;
        $('usdtName').innerHTML=usdtName;
        $('usdtPrice').innerHTML=usdtPrice;
        if(usdtChange<0){
            $('usdtChange').style.color="red";
            $('usdtChange').innerHTML=usdtChange+" &#x25BC;";
        }
        else{
            $('usdtChange').style.color="#4CAF50";
            $('usdtChange').innerHTML=usdtChange+" &#x25B2;";
        }
        //Cardano
        $('adaRank').innerHTML=adaRank;
        $('adaName').innerHTML=adaName;
        $('adaPrice').innerHTML=adaPrice;
        if(adaChange<0){
            $('adaChange').style.color="red";
            $('adaChange').innerHTML=adaChange+" &#x25BC;";
        }
        else{
            $('adaChange').style.color="#4CAF50";
            $('adaChange').innerHTML=adaChange+" &#x25B2;";
        }
        //Monero
        $('xmrRank').innerHTML=xmrRank;
        $('xmrName').innerHTML=xmrName;
        $('xmrPrice').innerHTML=xmrPrice;
        if(xmrChange<0){
            $('xmrChange').style.color="red";
            $('xmrChange').innerHTML=xmrChange+" &#x25BC;";
        }
        else{
            $('xmrChange').style.color="#4CAF50";
            $('xmrChange').innerHTML=xmrChange+" &#x25B2;";
        }
    }
};
xhttpBTC.send();
