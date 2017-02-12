$(document).ready(function() {
    console.log("finding something to buy");
    var baseTimeout = 600000;
    var desiredItemName = "Fatty Bearsteak";
    var desiredItemPrice = 13;
    buyDesiredItems(desiredItemName, desiredItemPrice);
    reloadPage(baseTimeout + getRandomInt(0, baseTimeout));
});

function buyDesiredItems(desiredItemName, desiredItemPrice) {
    $('.table > table > tbody > tr').each(function(){
        var itemId = $(this).attr('id').split('-')[1];
        var itemName = $(this).children('.item').children('a').children('strong').html();
        var quantity = $(this).children('.quantity').html();

        var counter = 0;
        if (itemName == desiredItemName) {
           var buyoutInGold = $(this).children('.price').children('.price-buyout').children('span:nth-child(1)').html();
           var buyoutInSilver = $(this).children('.price').children('.price-buyout').children('span:nth-child(2)').html();
           var buyoutInCopper = $(this).children('.price').children('.price-buyout').children('span:nth-child(3)').html();
           if (buyoutInGold / quantity <= desiredItemPrice && buyoutInGold != "--") {
              counter++;
              setTimeout(function() {

                 var totalBuyoutPrice = buyoutInGold * 1000 + buyoutInSilver * 100 + buyoutInCopper;
                 console.log("Trying to buy " + desiredItemName + " x" + quantity + " for " + buyoutInGold + " gold");
                 Auction.buyout(itemId, totalBuyoutPrice, $(this).children('.options').children('a:nth-child(2)'));
                 saveStatistics(itemName, quantity, buyoutInGold);

              }, counter * getRandomInt(100, 175));
           }
        }
        
    });
}

function saveStatistics(itemName, quantity, goldSpent) {
    var currentQuantity = localStorage.getItem(getQuantityKey(itemName));
    var currentGoldSpent = localStorage.getItem(getGoldKey(itemName));
    if (currentQuantity == null) {
        currentQuantity = 0;
    }
    if (currentGoldSpent == null) {
        currentGoldSpent = 0;
    }

    localStorage.setItem(getQuantityKey(itemName), parseInt(currentQuantity) + parseInt(quantity));
    localStorage.setItem(getGoldKey(itemName), parseInt(currentGoldSpent) + parseInt(goldSpent));
}

function printStatistics(itemName) {
    var currentQuantity = localStorage.getItem(getQuantityKey(itemName));
    var currentGoldSpent = localStorage.getItem(getGoldKey(itemName));
    console.log("Currently have bought " + currentQuantity + " " + itemName + " for " + currentGoldSpent + " gold");
}

function getQuantityKey(itemName) {
    return itemName.toLowerCase() + "-quantity";
}

function getGoldKey(itemName) {
    return itemName.toLowerCase() + "-gold";
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function reloadPage(timeout) {
    setTimeout(function(){
        location.reload();
    }, timeout);
}
