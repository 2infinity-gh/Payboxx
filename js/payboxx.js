$(document).ready(function() {

setCurrentTab(coinID);


	var explorer_tx = "https://chainz.cryptoid.info/"+coinID+"/tx.dws?"
	var explorer_addr = "https://chainz.cryptoid.info/"+coinID+"/address.dws?"
	var explorer_block = "https://chainz.cryptoid.info/"+coinID+"/block.dws?"

	var wallet_timer = false;
	var tx_timer = false;

	var input_count = 0;
	
	////////// Check balance every minute if address is available and tab active ///////////////
	setInterval(function(){
	var checkaddr =  $("#walletAddress"+coinID).html();
	if (checkaddr){
	walletApiBalance();
	}
	}, 60000);
	
	function onQRCodeScanned(scannedQR){
			var scannedAddress = document.getElementById("addressTo"+coinID);
			if(scannedAddress)
			{
				
				if(scannedQR.includes(":")){
				scannedQR = scannedQR.split(':')[1];
				}
				scannedAddress.value = scannedQR;
				$('#modalQrscanner').modal('hide');
				
				
			}
	}

	$('#modalQrscanner').on('shown.bs.modal', function (e) {
    
	JsQRScannerReady();
	
	})
	
	function JsQRScannerReady()
    {

        //create a new scanner passing to it a callback function that will be invoked when
        //the scanner succesfully scan a QR code
        var jbScanner = new JsQRScanner(onQRCodeScanned);
        //reduce the size of analyzed images to increase performance on mobile devices
        jbScanner.setSnapImageMaxSize(300);
    	var scannerParentElement = document.getElementById("QRscanner");
    	if(scannerParentElement)
    	{
    	    //append the jbScanner to an existing DOM element
    		jbScanner.appendTo(scannerParentElement);
			
    	} 
    
	$('#modalQrscanner').on('hide.bs.modal', function (e) {
    $('#QRscanner').empty();
	jbScanner.stopScanning();
	})
    }
	


////////////////  BZX Paperwallet ////////////////////

	$("#newPaperwalletBtnbzx").click(function(){
		if($("#newAddressbzx").val()==""){
			$("#newKeysBtnbzx").click();
		}
		//console.log(coinID);

		var paperwallet = window.open();
		paperwallet.document.write('<h2>BZX PaperWallet</h2><hr><div style="margin-top: 5px; margin-bottom: 5px"><div><h3 style="margin-top: 0">Address (Share)</h3></div><div style="text-align: center;"><div id="qraddressbzx"></div><p>'+$("#newAddressbzx").val()+'</p></div></div><hr><div style="margin-top: 5px; margin-bottom: 5px"><div><h3 style="margin-top: 0">Public Key</h3></div><div style="text-align: center;"><div id="qrpubkeybzx"></div><p>'+$("#newPubKeybzx").val()+'</p></div></div><hr><div style="margin-top: 5px; margin-bottom: 5px"><div><h3 style="margin-top: 0">Private Key (KEEP SECRET!)</h3></div><div style="text-align: center;"><div id="qrprivkeybzx"></div><p>'+$("#newPrivKeybzx").val()+'</p></div></div><hr>'+
		'<div>A Bitcoin Zero wallet is as simple as a single pairing of a Bitcoin Zero address with its corresponding Bitcoin Zero private key. Such a wallet has been generated for you in your web browser and is '+
		'displayed above. '+
		'To safeguard this wallet you must print or otherwise record the Bitcoin Zero address and private key. It is important to make a backup copy of the private key and store it in a safe location. '+
		'This site does not have knowledge of your private key. Your Bitcoin Zero private key '+
		'should be kept a secret. Whomever you share the private key with has access to spend all the bitcoinzeros associated with that address. If you print your wallet then store it in a zip lock bag to '+
		'keep it safe from water. Treat a paper wallet like cash. '+
		'Add funds to this wallet by instructing others to send bitcoinzeros to your Bitcoin Zero address. '+
		'Check your balance by going to https://chainz.cryptoid.info/bzx/ and entering your Bitcoin Zero address. '+
		'Spend your bitcoinzeros by going to https://payboxx.io and fill in your private key this website. You can also spend your funds by downloading a '+
		'Bitcoinzero wallet and importing your private key to the wallet. Keep in mind when you import your single key to a bitcoinzero p2p client and spend funds your key will be '+
		'bundled with other private keys in the p2p client wallet. When you perform a transaction your change will be sent to another bitcoin zero address within the p2p client wallet. You must then '+
		'backup the p2p client wallet and keep it safe as your remaining bitcoinzeros will be stored there. Satoshi advised that one should never delete a wallet.</div>');
		paperwallet.document.close();
		paperwallet.focus();
		new QRCode(paperwallet.document.getElementById("qraddressbzx"), {text: $("#newAddressbzx").val(), width: 200, height: 200});
		new QRCode(paperwallet.document.getElementById("qrpubkeybzx"), {text: $("#newPubKeybzx").val(), width: 200, height: 200});
		new QRCode(paperwallet.document.getElementById("qrprivkeybzx"), {text: $("#newPrivKeybzx").val(), width: 200, height: 200});
		paperwallet.print();
		paperwallet.close();
	});
	
///////////////// GXX Paperwallet ///////////////////	
	
	$("#newPaperwalletBtngxx").click(function(){
		if($("#newAddressgxx").val()==""){
			$("#newKeysBtngxx").click();
		}

		var paperwallet = window.open();
		paperwallet.document.write('<h2>GXX PaperWallet</h2><hr><div style="margin-top: 5px; margin-bottom: 5px"><div><h3 style="margin-top: 0">Address (Share)</h3></div><div style="text-align: center;"><div id="qraddressgxx"></div><p>'+$("#newAddressgxx").val()+'</p></div></div><hr><div style="margin-top: 5px; margin-bottom: 5px"><div><h3 style="margin-top: 0">Public Key</h3></div><div style="text-align: center;"><div id="qrpubkeygxx"></div><p>'+$("#newPubKeygxx").val()+'</p></div></div><hr><div style="margin-top: 5px; margin-bottom: 5px"><div><h3 style="margin-top: 0">Private Key (KEEP SECRET!)</h3></div><div style="text-align: center;"><div id="qrprivkeygxx"></div><p>'+$("#newPrivKeygxx").val()+'</p></div></div><hr>'+
		'<div>A GravityCoin wallet is as simple as a single pairing of a GravityCoin address with its corresponding GravityCoin private key. Such a wallet has been generated for you in your web browser and is '+
		'displayed above. '+
		'To safeguard this wallet you must print or otherwise record the GravityCoin address and private key. It is important to make a backup copy of the private key and store it in a safe location. '+
		'This site does not have knowledge of your private key. Your GravityCoin private key '+
		'should be kept a secret. Whomever you share the private key with has access to spend all the GravityCoins associated with that address. If you print your wallet then store it in a zip lock bag to'+
		'keep it safe from water. Treat a paper wallet like cash. '+
		'Add funds to this wallet by instructing others to send GravityCoins to your GravityCoin address. '+
		'Check your balance by going to https://chainz.cryptoid.info/bzx/ and entering your GravityCoin address. '+
		'Spend your GravityCoins by going to https://payboxx.io and fill in your private key this website. You can also spend your funds by downloading a '+
		'Gravitycoin wallet and importing your private key to the wallet. Keep in mind when you import your single key to a Gravitycoin p2p client and spend funds your key will be '+
		'bundled with other private keys in the p2p client wallet. When you perform a transaction your change will be sent to another GravityCoin address within the p2p client wallet. You must then '+
		'backup the p2p client wallet and keep it safe as your remaining GravityCoins will be stored there. Satoshi advised that one should never delete a wallet.</div>');		
		paperwallet.document.close();
		paperwallet.focus();
		new QRCode(paperwallet.document.getElementById("qraddressgxx"), {text: $("#newAddressgxx").val(), width: 200, height: 200});
		new QRCode(paperwallet.document.getElementById("qrpubkeygxx"), {text: $("#newPubKeygxx").val(), width: 200, height: 200});
		new QRCode(paperwallet.document.getElementById("qrprivkeygxx"), {text: $("#newPrivKeygxx").val(), width: 200, height: 200});
		paperwallet.print();
		paperwallet.close();
	});
	
///////////////////// BCZ Paperwallet ////////////////	
	
	$("#newPaperwalletBtnbcz").click(function(){
		if($("#newAddressbcz").val()==""){
			$("#newKeysBtnbcz").click();
		}

		var paperwallet = window.open();
		paperwallet.document.write('<h2>BCZ PaperWallet</h2><hr><div style="margin-top: 5px; margin-bottom: 5px"><div><h3 style="margin-top: 0">Address (Share)</h3></div><div style="text-align: center;"><div id="qraddressbcz"></div><p>'+$("#newAddressbcz").val()+'</p></div></div><hr><div style="margin-top: 5px; margin-bottom: 5px"><div><h3 style="margin-top: 0">Public Key</h3></div><div style="text-align: center;"><div id="qrpubkeybcz"></div><p>'+$("#newPubKeybcz").val()+'</p></div></div><hr><div style="margin-top: 5px; margin-bottom: 5px"><div><h3 style="margin-top: 0">Private Key (KEEP SECRET!)</h3></div><div style="text-align: center;"><div id="qrprivkeybcz"></div><p>'+$("#newPrivKeybcz").val()+'</p></div></div><hr>'+
		'<div>A BitcoinCZ wallet is as simple as a single pairing of a BitcoinCZ address with its corresponding BitcoinCZ private key. Such a wallet has been generated for you in your web browser and is '+
		'displayed above. '+
		'To safeguard this wallet you must print or otherwise record the BitcoinCZ address and private key. It is important to make a backup copy of the private key and store it in a safe location. '+
		'This site does not have knowledge of your private key. Your BitcoinCZ private key '+
		'should be kept a secret. Whomever you share the private key with has access to spend all the Bitcoinczs associated with that address. If you print your wallet then store it in a zip lock bag to '+
		'keep it safe from water. Treat a paper wallet like cash. '+
		'Add funds to this wallet by instructing others to send bitcoinczs to your BitcoinCZ address. '+
		'Check your balance by going to https://chainz.cryptoid.info/bzx/ and entering your BitcoinCZ address. '+
		'Spend your bitcoinczs by going to https://payboxx.io and fill in your private key this website. You can also spend your funds by downloading a '+
		'BitcoinCZ wallet and importing your private key to the wallet. Keep in mind when you import your single key to a bitcoincz p2p client and spend funds your key will be '+
		'bundled with other private keys in the p2p client wallet. When you perform a transaction your change will be sent to another Bitcoincz address within the p2p client wallet. You must then '+
		'backup the p2p client wallet and keep it safe as your remaining BitcoinCZs will be stored there. Satoshi advised that one should never delete a wallet.</div>');
		paperwallet.document.close();
		paperwallet.focus();
		new QRCode(paperwallet.document.getElementById("qraddressbcz"), {text: $("#newAddressbcz").val(), width: 200, height: 200});
		new QRCode(paperwallet.document.getElementById("qrpubkeybcz"), {text: $("#newPubKeybcz").val(), width: 200, height: 200});
		new QRCode(paperwallet.document.getElementById("qrprivkeybcz"), {text: $("#newPrivKeybcz").val(), width: 200, height: 200});
		paperwallet.print();
		paperwallet.close();
	});



///// CONFIRMSEND BZX

	$("#walletConfirmSendbzx").click(function(){
		var thisbtn = $(this);
		var tx = boxxjs.transaction();
		var txfee = document.getElementById("txFeebzx").value;
		var total = (txfee*1);
		$.each($(".output #walletSpendTobzx"), function(i,o){
			var amount = document.getElementById("amountTosendbzx").value;
			var addr = document.getElementById("addressTobzx").value;
			addr = addr.replace(/\s/g, '');
				if(amount*1>0){
				total += amount*1;
				tx.addoutput(addr, amount*1);
			}
		});
        thisbtn.attr('disabled',true);

		var script = false;
		if($("#walletSegwitbzx").is(":checked")){
			if($("#walletSegwitBech32bzx").is(":checked")){
				var sw = boxxjs.bech32Address($("#walletKeysbzx .pubkey").val());
			} else {
				var sw = boxxjs.segwitAddress($("#walletKeysbzx .pubkey").val());
			}
			script = sw.redeemscript;
		}

		var sequence = false;
		if($("#walletRBFbzx").is(":checked")){
			sequence = 0xffffffff-2;
		}

		tx.addUnspent($("#walletAddressbzx").html(), function(data){

			var dvalue = (data.value).toFixed(8) * 1;
			total = parseFloat(total*1).toFixed(8) * 1;

			if(dvalue>=total){
				var change = dvalue-total;
				if((change*1)>0){
					tx.addoutput($("#walletAddressbzx").html(), change);
				}

				// clone the transaction with out using boxxjs.clone() function as it gives us trouble
				var tx2 = boxxjs.transaction();
				var txunspent = tx2.deserialize(tx.serialize());

				// then sign
				var signed = txunspent.sign($("#redeemFrombzx").val());

				// and finally broadcast!

				tx2.broadcast(function(data){
					if($(data).find("result").text()=="1"){
						$("#walletSendConfirmStatusbzx").removeClass('hidden').addClass('alert-success').html('txid: <a href="https://chainz.cryptoid.info/bzx/tx.dws?'+$(data).find("txid").text()+'" target="_blank" style="color:#8ed7f1 !important;font-size:70%;">'+$(data).find("txid").text()+'</a>');
					} else {
						$("#walletSendConfirmStatusbzx").removeClass('hidden').addClass('alert-danger').html(unescape($(data).find("response").text()).replace(/\+/g,' '));
						$("#walletSendFailTransactionbzx").removeClass('hidden');
						$("#walletSendFailTransactionbzx"+" textarea").val(signed);
						thisbtn.attr('disabled',false);
					}

					// update wallet balance
					walletApiBalance();

				}, signed);
			} else {
				$("#walletSendConfirmStatusbzx").removeClass("hidden").addClass('alert-danger').html("You have a confirmed balance of "+dvalue+" "+coinID+" unable to send "+total+" BZX").fadeOut().fadeIn();
				thisbtn.attr('disabled',false);
			}

			$("#walletLoaderbzx").addClass("hidden");

		}, script, script, sequence);
	});


	///// CONFIRMSEND GXX

	$("#walletConfirmSendgxx").click(function(){
		var thisbtn = $(this);
		var tx = boxxjs.transaction();
		var txfee = document.getElementById("txFeegxx").value;
		var total = (txfee*1);
		$.each($(".output #walletSpendTogxx"), function(i,o){
			var amount = document.getElementById("amountTosendgxx").value;
			var addr = document.getElementById("addressTogxx").value;
			addr = addr.replace(/\s/g, '');
				if(amount*1>0){
				total += amount*1;
				tx.addoutput(addr, amount*1);
			}
		});
        thisbtn.attr('disabled',true);

		var script = false;
		if($("#walletSegwitgxx").is(":checked")){
			if($("#walletSegwitBech32gxx").is(":checked")){
				var sw = boxxjs.bech32Address($("#walletKeysgxx .pubkey").val());
			} else {
				var sw = boxxjs.segwitAddress($("#walletKeysgxx .pubkey").val());
			}
			script = sw.redeemscript;
		}

		var sequence = false;
		if($("#walletRBFgxx").is(":checked")){
			sequence = 0xffffffff-2;
		}

		tx.addUnspent($("#walletAddressgxx").html(), function(data){

			var dvalue = (data.value).toFixed(8) * 1;
			total = parseFloat(total*1).toFixed(8) * 1;

			if(dvalue>=total){
				var change = dvalue-total;
				if((change*1)>0){
					tx.addoutput($("#walletAddressgxx").html(), change);
				}

				// clone the transaction with out using boxxjs.clone() function as it gives us trouble
				var tx2 = boxxjs.transaction();
				var txunspent = tx2.deserialize(tx.serialize());

				// then sign
				var signed = txunspent.sign($("#redeemFromgxx").val());

				// and finally broadcast!

				tx2.broadcast(function(data){
					if($(data).find("result").text()=="1"){
						$("#walletSendConfirmStatusgxx").removeClass('hidden').addClass('alert-success').html('txid: <a href="https://chainz.cryptoid.info/gxx/tx.dws?'+$(data).find("txid").text()+'" target="_blank" style="color:#ffc107 !important;font-size:70%;">'+$(data).find("txid").text()+'</a>');
					} else {
						$("#walletSendConfirmStatusgxx").removeClass('hidden').addClass('alert-danger').html(unescape($(data).find("response").text()).replace(/\+/g,' '));
						$("#walletSendFailTransactiongxx").removeClass('hidden');
						$("#walletSendFailTransactiongxx"+" textarea").val(signed);
						thisbtn.attr('disabled',false);
					}

					// update wallet balance
					walletApiBalance();

				}, signed);
			} else {
				$("#walletSendConfirmStatusgxx").removeClass("hidden").addClass('alert-danger').html("You have a confirmed balance of "+dvalue+" gxx unable to send "+total+" gxx").fadeOut().fadeIn();
				thisbtn.attr('disabled',false);
			}

			$("#walletLoader"+coinID).addClass("hidden");

		}, script, script, sequence);
	});

	///// CONFIRMSEND BCZ



	$("#walletConfirmSendbcz").click(function(){
		var thisbtn = $(this);
		var tx = boxxjs.transaction();
		var txfee = document.getElementById("txFeebcz").value;
		var total = (txfee*1);
		$.each($(".output #walletSpendTobcz"), function(i,o){
			var amount = document.getElementById("amountTosendbcz").value;
			var addr = document.getElementById("addressTobcz").value;
			addr = addr.replace(/\s/g, '');
				if(amount*1>0){
				total += amount*1;
				tx.addoutput(addr, amount*1);
			}
		});
        thisbtn.attr('disabled',true);

		var script = false;
		if($("#walletSegwitbcz").is(":checked")){
			if($("#walletSegwitBech32bcz").is(":checked")){
				var sw = boxxjs.bech32Address($("#walletKeysbcz .pubkey").val());
			} else {
				var sw = boxxjs.segwitAddress($("#walletKeysbcz .pubkey").val());
			}
			script = sw.redeemscript;
		}

		var sequence = false;
		if($("#walletRBFbcz").is(":checked")){
			sequence = 0xffffffff-2;
		}

		tx.addUnspent($("#walletAddressbcz").html(), function(data){

			var dvalue = (data.value).toFixed(8) * 1;
			total = parseFloat(total*1).toFixed(8) * 1;

			if(dvalue>=total){
				var change = dvalue-total;
				if((change*1)>0){
					tx.addoutput($("#walletAddressbcz").html(), change);
				}

				// clone the transaction with out using boxxjs.clone() function as it gives us trouble
				var tx2 = boxxjs.transaction();
				var txunspent = tx2.deserialize(tx.serialize());

				// then sign
				var signed = txunspent.sign($("#redeemFrombcz").val());

				// and finally broadcast!

				tx2.broadcast(function(data){
					if($(data).find("result").text()=="1"){
						$("#walletSendConfirmStatusbcz").removeClass('hidden').addClass('alert-success').html('txid: <a href="https://chainz.cryptoid.info/bcz/tx.dws?'+$(data).find("txid").text()+'" target="_blank" style="color:#3cd5b0 !important;font-size:70%;">'+$(data).find("txid").text()+'</a>');
					} else {
						$("#walletSendConfirmStatusbcz").removeClass('hidden').addClass('alert-danger').html(unescape($(data).find("response").text()).replace(/\+/g,' '));
						$("#walletSendFailTransactionbcz").removeClass('hidden');
						$("#walletSendFailTransactionbcz"+" textarea").val(signed);
						thisbtn.attr('disabled',false);
					}

					// update wallet balance
					walletApiBalance();

				}, signed);
			} else {
				$("#walletSendConfirmStatusbcz").removeClass("hidden").addClass('alert-danger').html("You have a confirmed balance of "+dvalue+" "+coinID+" unable to send "+total+" bcz").fadeOut().fadeIn();
				thisbtn.attr('disabled',false);
			}

			$("#walletLoader"+coinID).addClass("hidden");

		}, script, script, sequence);
	});

	/////////////////////////////////////////////////////////////////////////////////////////////////////////


	///// BZX SEND /////

	$("#walletSendBtnbzx").click(function(){

		$("#walletSendFailTransactionbzx").addClass('hidden');
		$("#walletSendStatusbzx").addClass("hidden").html("");

		var thisbtn = $(this);
		var txfee = parseFloat(document.getElementById("txFeebzx").value);




		var total = txfee*1;

		$.each($(".output #walletSpendTobzx"), function(i,o){
			var amount = parseFloat(document.getElementById("amountTosendbzx").value);
			var address = document.getElementById("addressTobzx").value;
            $("#spendAddressbzx").html(address);
			total += amount;
			if((!isNaN($(amount))) && $(amount)>0){
				$(amount).parent().removeClass('has-error');
			} else {
				$(amount).parent().addClass('has-error');
			}

			if(boxxjs.addressDecode($(address))){
				$(address).parent().removeClass('has-error');
			} else {
				$(address).parent().addClass('has-error');
			}
		});

		total = parseFloat(total).toFixed(8);

		if($("#walletSpendbzx .has-error").length==0){
			var balance = ($("#walletBalancebzx").html()).replace(/[^0-9\.]+/g,'')*1;
			if(total<=balance){
				$("#walletSendConfirmStatusbzx").addClass("hidden").removeClass('alert-success').removeClass('alert-danger').html("");
				$("#spendAmountbzx").html(total);

				$("#modalWalletConfirmbzx").modal("show");
				$("#walletConfirmSendbzx").attr('disabled',false);
			} else {
				$("#walletSendStatusbzx").removeClass("hidden").html("You are trying to spend "+total+' but have a balance of '+balance);
			}
		} else {
			$("#walletSpendbzx"+" .has-error").fadeOut().fadeIn();
			$("#walletSendStatusbzx").removeClass("hidden").html('<span class="glyphicon glyphicon-exclamation-sign"></span> One or more input has an error');
		}
	});


		///// GXX SEND /////

	$("#walletSendBtngxx").click(function(){

		$("#walletSendFailTransactiongxx").addClass('hidden');
		$("#walletSendStatusgxx").addClass("hidden").html("");

		var thisbtn = $(this);
		var txfee = parseFloat(document.getElementById("txFeegxx").value);




		var total = txfee*1;

		$.each($(".output #walletSpendTogxx"), function(i,o){
			var amount = parseFloat(document.getElementById("amountTosendgxx").value);
			var address = document.getElementById("addressTogxx").value;
            $("#spendAddressgxx").html(address);
			total += amount;
			if((!isNaN($(amount))) && $(amount)>0){
				$(amount).parent().removeClass('has-error');
			} else {
				$(amount).parent().addClass('has-error');
			}

			if(boxxjs.addressDecode($(address))){
				$(address).parent().removeClass('has-error');
			} else {
				$(address).parent().addClass('has-error');
			}
		});

		total = parseFloat(total).toFixed(8);

		if($("#walletSpendgxx .has-error").length==0){
			var balance = ($("#walletBalancegxx").html()).replace(/[^0-9\.]+/g,'')*1;
			if(total<=balance){
				$("#walletSendConfirmStatusgxx").addClass("hidden").removeClass('alert-success').removeClass('alert-danger').html("");
				$("#spendAmountgxx").html(total);

				$("#modalWalletConfirmgxx").modal("show");
				$("#walletConfirmSendgxx").attr('disabled',false);
			} else {
				$("#walletSendStatusgxx").removeClass("hidden").html("You are trying to spend "+total+' but have a balance of '+balance);
			}
		} else {
			$("#walletSpendgxx .has-error").fadeOut().fadeIn();
			$("#walletSendStatusgxx").removeClass("hidden").html('<span class="glyphicon glyphicon-exclamation-sign"></span> One or more input has an error');
		}
	});

			///// BCZ SEND /////

	$("#walletSendBtnbcz").click(function(){

		$("#walletSendFailTransactionbcz").addClass('hidden');
		$("#walletSendStatusbcz").addClass("hidden").html("");

		var thisbtn = $(this);
		var txfee = parseFloat(document.getElementById("txFeebcz").value);




		var total = txfee*1;

		$.each($(".output #walletSpendTobcz"), function(i,o){
			var amount = parseFloat(document.getElementById("amountTosendbcz").value);
			var address = document.getElementById("addressTobcz").value;
            $("#spendAddressbcz").html(address);
			total += amount;

			if((!isNaN($(amount))) && $(amount)>0){
				$(amount).parent().removeClass('has-error');
			} else {
				$(amount).parent().addClass('has-error');
			}

			if(boxxjs.addressDecode($(address))){
				$(address).parent().removeClass('has-error');
			} else {
				$(address).parent().addClass('has-error');
			}
		});

		total = parseFloat(total).toFixed(8);

		if($("#walletSpendbcz .has-error").length==0){
			var balance = ($("#walletBalancebcz").html()).replace(/[^0-9\.]+/g,'')*1;
			if(total<=balance){
				$("#walletSendConfirmStatusbcz").addClass("hidden").removeClass('alert-success').removeClass('alert-danger').html("");
				$("#spendAmountbcz").html(total);

				$("#modalWalletConfirmbcz").modal("show");
				$("#walletConfirmSendbcz").attr('disabled',false);
			} else {
				$("#walletSendStatusbcz").removeClass("hidden").html("You are trying to spend "+total+' but have a balance of '+balance);
			}
		} else {
			$("#walletSpendbcz .has-error").fadeOut().fadeIn();
			$("#walletSendStatusbcz").removeClass("hidden").html('<span class="glyphicon glyphicon-exclamation-sign"></span> One or more input has an error');
		}
	});

	/////////////////////////////

	$("#walletShowSpend"+coinID).click(function(){
		hideAll();

		$("#walletSpend"+coinID).removeClass("hidden");
	});

	$("#walletSpendTo"+coinID+" .addressAdd").click(function(){
		var clone = '<div class="form-horizontal output">'+$(this).parent().html()+'</div>';
		$("#walletSpendTo"+coinID).append(clone);
		$("#walletSpendTo"+coinID+" .glyphicon-plus:last").removeClass('glyphicon-plus').addClass('glyphicon-minus');
		$("#walletSpendTo"+coinID+" .glyphicon-minus:last").parent().removeClass('addressAdd').addClass('addressRemove');
		$("#walletSpendTo"+coinID+" .addressRemove").unbind("");
		$("#walletSpendTo"+coinID+" .addressRemove").click(function(){
			$(this).parent().fadeOut().remove();
		});
	});

	function walletApiBalance() {
	 addr =  $("#walletAddress"+coinID).html();
	 

	 $.ajax ({
		 type: "GET",
		 url: "https://apixx.ovh/?s="+coinID+"&q=getbalance&a="+$("#walletAddress"+coinID).html(),
		 dataType: "json",
		 error: function(data) {
			 $("#redeemFromStatus"+coinID).removeClass('hidden').html('<span class="glyphicon glyphicon-exclamation-sign"></span> Unexpected error, unable to retrieve unspent outputs!(reload privkey if issue persists)');
		 },
		 success: function(data) {
			
			$("#walletBalance"+coinID).html(parseFloat(data.balance.confirmed).toFixed(8)+" "+coinID.toUpperCase()).fadeOut().fadeIn();
			$("#walletBalanceUn"+coinID).html(parseFloat(data.balance.unconfirmed).toFixed(8)+" "+coinID.toUpperCase()).fadeOut().fadeIn();
			$("#walletLoader"+coinID).addClass("hidden");
		 },
		 complete: function(data, status) {
			 $("#redeemFromBtn"+coinID).html("Load").attr('disabled',false);
			 totalInputAmount();
		 }
	 });
	}


	/* Unconfirmed balance */
	function walletApiUncBalance() {
	var coinIDup = coinID.toUpperCase();	
	 $.ajax ({
		 type: "GET",
		url: "https://apixx.ovh/?s="+coinID+"&q=getbalance&a="+$("#walletAddress"+coinID).html(),
		 dataType: "json",
		 error: function(data) {
			 $("#redeemFromStatus"+coinID).removeClass('hidden').html('<span class="glyphicon glyphicon-exclamation-sign"></span> Unexpected error, unable to retrieve unspent outputs!');
		 },
		 success: function(data) {
			$("#walletBalanceUn"+coinID).html(data.balance.unconfirmed+" "+coinIDup).fadeOut().fadeIn();

			$("#walletLoader"+coinID).addClass("hidden");
		 },
		 complete: function(data, status) {
			 $("#redeemFromBtn"+coinID).html("Load").attr('disabled',false);
			 totalInputAmount();
		 }
	 });
	}

	/* Transactions List */
	function getTxConf(txid,cb,cberr){
		$.ajax ({
			type: "GET",
			url: "https://apixx.ovh/?s="+coinID+"&q=getrawtx&tx="+txid,
			dataType: "json",
			error: function(data) {
				cberr();
				$("#redeemFromStatus"+coinID).removeClass('hidden').html('<span class="glyphicon glyphicon-exclamation-sign"></span> Unexpected error, unable to retrieve unspent outputs!');
			},
			success: function(data) {
				cb(data.txid, data.confirmations);
			},
			complete: function(data, status) {
				$("#redeemFromBtn"+coinID).html("Load").attr('disabled',false);
			}
		});
	}

	function getAddressTx(cb, cberr){
		$.ajax ({
			type: "GET",
			url: "https://apixx.ovh/?s="+coinID+"&q=addr&a="+$("#walletAddress"+coinID).html(),
			dataType: "json",
			error: function(data) {
				cberr();
				$("#redeemFromStatus"+coinID).removeClass('hidden').html('<span class="glyphicon glyphicon-exclamation-sign"></span> Unexpected error, unable to retrieve unspent outputs!');
			},
			success: function(data) {
				cb(data.transactions);
			},
			complete: function(data, status) {
				$("#redeemFromBtn"+coinID).html("Load").attr('disabled',false);
			}
		});
	}


	function addHeader(tx,conf){
		var tb = document.getElementById("txtable");
		tb.innerHTML = "";
		hd = tb.createTHead();
		row = hd.insertRow();
		c1 = row.insertCell();
		c2 = row.insertCell();
		c1.innerHTML = "Transaction";
		c2.innerHTML = "Confirmations";
		c1.style.fontWeight = 900;
		c2.style.fontWeight = 900;
		c1.style.textAlign = "center";
		c2.style.textAlign = "center";
	}

	function addTxHistory(tx,conf){
		var rtx = document.getElementById("txtable");
		row = rtx.insertRow()
		c1 = row.insertCell();
		c2 = row.insertCell();
		c1.innerHTML = "<a href=\""+explorer_tx+tx+"\" />"+tx.slice(0, 14)+"</a>";
		c2.innerHTML = conf;
		if (conf < 6) {
			c2.style.color = "red";
		}else {
			c2.style.color = "green";
		}
		c1.style.textAlign = "center";
		c2.style.textAlign = "center";

	}

	function buildHistory(){
		getAddressTx(function(txarr){
			var l = txarr.length;
			if (l > 0){
				for (i = 0; i < l; i++) {
					getTxConf(txarr[i],function(tx,conf){
						// console.log(tx);
						addTxHistory(tx,conf);
					}, function(){
						// console.log("Failed to load address transaction");
						return;
					});
				}
			}
		}, function(){
			// console.log("Failed to load address transaction");
			return;
		})
	}


	function checkBalanceLoop(){
		clearTimeout(wallet_timer);
		wallet_timer = setTimeout(function(){
			if($("#walletLoader"+coinID).hasClass("hidden")){
				walletApiBalance();
			}
			checkBalanceLoop();
		},45000);
	}

	function checkTxLoop(){
		clearTimeout(tx_timer);
		tx_timer = setTimeout(function(){
			if($("#walletLoader"+coinID).hasClass("hidden")){
				hideAll();
				addHeader();
				buildHistory();
				$("#walletTxHistory"+coinID).removeClass("hidden").fadeOut().fadeIn();
			}
			checkTxLoop();
		},45000);
	}

	/* new -> address code */

	$("#newKeysBtnbzx").click(function(){
		boxxjs.compressed = false;
		if($("#newCompressed").is(":checked")){
			boxxjs.compressed = true;
		}
		var s = ($("#newBrainwallet").is(":checked")) ? $("#brainwallet").val() : null;
		var coin = boxxjs.newKeys(s);
		$("#newAddressbzx").val(coin.address);
		$("#newPubKeybzx").val(coin.pubkey);
		$("#newPrivKeybzx").val(coin.wif);

		/* encrypted key code */
		if((!$("#encryptKey").is(":checked")) || $("#aes256passbzx").val()==$("#aes256pass_confirmbzx").val()){
			$("#aes256passStatus").addClass("hidden");
			if($("#encryptKey").is(":checked")){
				$("#aes256wifkey").removeClass("hidden");
			}
		} else {
			$("#aes256passStatus").removeClass("hidden");
		}
		$("#newPrivKeyEncbzx").val(CryptoJS.AES.encrypt(coin.wif, $("#aes256passbzx").val())+'');

	});


	$("#newKeysBtngxx").click(function(){
		boxxjs.compressed = false;
		if($("#newCompressed").is(":checked")){
			boxxjs.compressed = true;
		}
		var s = ($("#newBrainwallet").is(":checked")) ? $("#brainwallet").val() : null;
		var coin = boxxjs.newKeys(s);
		$("#newAddressgxx").val(coin.address);
		$("#newPubKeygxx").val(coin.pubkey);
		$("#newPrivKeygxx").val(coin.wif);

		/* encrypted key code */
		if((!$("#encryptKey").is(":checked")) || $("#aes256passgxx").val()==$("#aes256pass_confirmgxx").val()){
			$("#aes256passStatus").addClass("hidden");
			if($("#encryptKey").is(":checked")){
				$("#aes256wifkey").removeClass("hidden");
			}
		} else {
			$("#aes256passStatus").removeClass("hidden");
		}
		$("#newPrivKeyEncgxx").val(CryptoJS.AES.encrypt(coin.wif, $("#aes256passgxx").val())+'');

	});

	$("#newKeysBtnbcz").click(function(){
		boxxjs.compressed = false;
		if($("#newCompressed").is(":checked")){
			boxxjs.compressed = true;
		}
		var s = ($("#newBrainwallet").is(":checked")) ? $("#brainwallet").val() : null;
		var coin = boxxjs.newKeys(s);
		$("#newAddressbcz").val(coin.address);
		$("#newPubKeybcz").val(coin.pubkey);
		$("#newPrivKeybcz").val(coin.wif);

		/* encrypted key code */
		if((!$("#encryptKey").is(":checked")) || $("#aes256passbcz").val()==$("#aes256pass_confirmbcz").val()){
			$("#aes256passStatus").addClass("hidden");
			if($("#encryptKey").is(":checked")){
				$("#aes256wifkey").removeClass("hidden");
			}
		} else {
			$("#aes256passStatus").removeClass("hidden");
		}
		$("#newPrivKeyEncbcz").val(CryptoJS.AES.encrypt(coin.wif, $("#aes256passbcz").val())+'');

	});

	$("#newBrainwallet").click(function(){
		if($(this).is(":checked")){
			$("#brainwallet").removeClass("hidden");
		} else {
			$("#brainwallet").addClass("hidden");
		}
	});

	$("#newSegWitBrainwallet").click(function(){
		if($(this).is(":checked")){
			$("#brainwalletSegWit").removeClass("hidden");
		} else {
			$("#brainwalletSegWit").addClass("hidden");
		}
	});

	$("#encryptKey").click(function(){
		if($(this).is(":checked")){
			$("#aes256passform").removeClass("hidden");
		} else {
			$("#aes256wifkey, #aes256passform, #aes256passStatus").addClass("hidden");
		}
	});

	/* new -> segwit code */
	$("#newSegWitKeysBtn").click(function(){
		var compressed = boxxjs.compressed;
		boxxjs.compressed = true;

		var s = ($("#newSegWitBrainwallet").is(":checked")) ? $("#brainwalletSegWit").val() : null;
		var coin = boxxjs.newKeys(s);

		if($("#newSegWitBech32addr").is(":checked")){
			var sw = boxxjs.bech32Address(coin.pubkey);
		} else {
			var sw = boxxjs.segwitAddress(coin.pubkey);
		}

		$("#newSegWitAddress").val(sw.address);
		$("#newSegWitRedeemScript").val(sw.redeemscript);
		$("#newSegWitPubKey").val(coin.pubkey);
		$("#newSegWitPrivKey").val(coin.wif);
		boxxjs.compressed = compressed;
	});


	/* new -> multisig code */

	$("#newMultiSigAddress").click(function(){

		$("#multiSigData").removeClass('show').addClass('hidden').fadeOut();
		$("#multisigPubKeys .pubkey").parent().removeClass('has-error');
		$("#releaseCoins").parent().removeClass('has-error');
		$("#multiSigErrorMsg").hide();

		if((isNaN($("#releaseCoins option:selected").html())) || ((!isNaN($("#releaseCoins option:selected").html())) && ($("#releaseCoins option:selected").html()>$("#multisigPubKeys .pubkey").length || $("#releaseCoins option:selected").html()*1<=0 || $("#releaseCoins option:selected").html()*1>8))){
			$("#releaseCoins").parent().addClass('has-error');
			$("#multiSigErrorMsg").html('<span class="glyphicon glyphicon-exclamation-sign"></span> Minimum signatures required is greater than the amount of public keys provided').fadeIn();
			return false;
		}

		var keys = [];
		$.each($("#multisigPubKeys .pubkey"), function(i,o){
			if(boxxjs.pubkeydecompress($(o).val())){
				keys.push($(o).val());
				$(o).parent().removeClass('has-error');
			} else {
				$(o).parent().addClass('has-error');
			}
		});

		if(($("#multisigPubKeys .pubkey").parent().hasClass('has-error')==false) && $("#releaseCoins").parent().hasClass('has-error')==false){
			var sigsNeeded = $("#releaseCoins option:selected").html();
			var multisig =  boxxjs.pubkeys2MultisigAddress(keys, sigsNeeded);
			if(multisig.size <= 520){
				$("#multiSigData .address").val(multisig['address']);
				$("#multiSigData .script").val(multisig['redeemScript']);
				$("#multiSigData .scriptUrl").val(document.location.origin+''+document.location.pathname+'?verify='+multisig['redeemScript']+'#verify');
				$("#multiSigData").removeClass('hidden').addClass('show').fadeIn();
				$("#releaseCoins").removeClass('has-error');
			} else {
				$("#multiSigErrorMsg").html('<span class="glyphicon glyphicon-exclamation-sign"></span> Your generated redeemscript is too large (>520 bytes) it can not be used safely').fadeIn();
			}
		} else {
			$("#multiSigErrorMsg").html('<span class="glyphicon glyphicon-exclamation-sign"></span> One or more public key is invalid!').fadeIn();
		}
	});

	$("#multisigPubKeys .pubkeyAdd").click(function(){
		if($("#multisigPubKeys .pubkeyRemove").length<14){
			var clone = '<div class="form-horizontal">'+$(this).parent().html()+'</div>';
			$("#multisigPubKeys").append(clone);
			$("#multisigPubKeys .glyphicon-plus:last").removeClass('glyphicon-plus').addClass('glyphicon-minus');
			$("#multisigPubKeys .glyphicon-minus:last").parent().removeClass('pubkeyAdd').addClass('pubkeyRemove');
			$("#multisigPubKeys .pubkeyRemove").unbind("");
			$("#multisigPubKeys .pubkeyRemove").click(function(){
				$(this).parent().fadeOut().remove();
			});
		}
	});

	$("#mediatorList").change(function(){
		var data = ($(this).val()).split(";");
		$("#mediatorPubkey").val(data[0]);
		$("#mediatorEmail").val(data[1]);
		$("#mediatorFee").val(data[2]);
	}).change();

	$("#mediatorAddKey").click(function(){
		var count = 0;
		var len = $(".pubkeyRemove").length;
		if(len<14){
			$.each($("#multisigPubKeys .pubkey"),function(i,o){
				if($(o).val()==''){
					$(o).val($("#mediatorPubkey").val()).fadeOut().fadeIn();
					$("#mediatorClose").click();
					return false;
				} else if(count==len){
					$("#multisigPubKeys .pubkeyAdd").click();
					$("#mediatorAddKey").click();
					return false;
				}
				count++;
			});

			$("#mediatorClose").click();
		}
	});

	/* new -> time locked code */

	/*$('#timeLockedDateTimePicker').datetimepicker({
		format: "MM/DD/YYYY HH:mm",
	}); */

	$('#timeLockedRbTypeBox input').change(function(){
		if ($('#timeLockedRbTypeDate').is(':checked')){
			$('#timeLockedDateTimePicker').show();
			$('#timeLockedBlockHeight').hide();
		} else {
			$('#timeLockedDateTimePicker').hide();
			$('#timeLockedBlockHeight').removeClass('hidden').show();
		}
	});

    $("#newTimeLockedAddress").click(function(){

        $("#timeLockedData").removeClass('show').addClass('hidden').fadeOut();
        $("#timeLockedPubKey").parent().removeClass('has-error');
        $("#timeLockedDateTimePicker").parent().removeClass('has-error');
        $("#timeLockedErrorMsg").hide();

        if(!boxxjs.pubkeydecompress($("#timeLockedPubKey").val())) {
        	$('#timeLockedPubKey').parent().addClass('has-error');
        }

        var nLockTime = -1;

        if ($('#timeLockedRbTypeDate').is(':checked')){
        	// by date
	        var date = $('#timeLockedDateTimePicker').data("DateTimePicker").date();
	        if(!date || !date.isValid()) {
	        	$('#timeLockedDateTimePicker').parent().addClass('has-error');
	        }
	        nLockTime = date.unix()
	        if (nLockTime < 500000000) {
	        	$('#timeLockedDateTimePicker').parent().addClass('has-error');
	        }
        } else {
			nLockTime = parseInt($('#timeLockedBlockHeightVal').val(), 10);
	        if (nLockTime >= 500000000) {
	        	$('#timeLockedDateTimePicker').parent().addClass('has-error');
	        }
        }

        if(($("#timeLockedPubKey").parent().hasClass('has-error')==false) && $("#timeLockedDateTimePicker").parent().hasClass('has-error')==false){
        	try {
	            var hodl = boxxjs.simpleHodlAddress($("#timeLockedPubKey").val(), nLockTime);
	            $("#timeLockedData .address").val(hodl['address']);
	            $("#timeLockedData .script").val(hodl['redeemScript']);
	            $("#timeLockedData .scriptUrl").val(document.location.origin+''+document.location.pathname+'?verify='+hodl['redeemScript']+'#verify');
	            $("#timeLockedData").removeClass('hidden').addClass('show').fadeIn();
	        } catch(e) {
	        	$("#timeLockedErrorMsg").html('<span class="glyphicon glyphicon-exclamation-sign"></span> ' + e).fadeIn();
	        }
        } else {
            $("#timeLockedErrorMsg").html('<span class="glyphicon glyphicon-exclamation-sign"></span> Public key and/or date is invalid!').fadeIn();
        }
    });

	/* new -> Hd address code */

	$(".deriveHDbtn").click(function(){
		$("#verifyScript").val($("input[type='text']",$(this).parent().parent()).val());
		window.location = "#verify";
		$("#verifyBtn").click();
	});

	$("#newHDKeysBtn").click(function(){
		boxxjs.compressed = true;
		var s = ($("#newHDBrainwallet").is(":checked")) ? $("#HDBrainwallet").val() : null;
		var hd = boxxjs.hd();
		var pair = hd.master(s);
		$("#newHDxpub").val(pair.pubkey);
		$("#newHDxprv").val(pair.privkey);

	});

	$("#newHDBrainwallet").click(function(){
		if($(this).is(":checked")){
			$("#HDBrainwallet").removeClass("hidden");
		} else {
			$("#HDBrainwallet").addClass("hidden");
		}
	});

	/* new -> transaction code */

	$("#recipients .addressAddTo").click(function(){
		if($("#recipients .addressRemoveTo").length<19){
			var clone = '<div class="row recipient"><br>'+$(this).parent().parent().html()+'</div>';
			$("#recipients").append(clone);
			$("#recipients .glyphicon-plus:last").removeClass('glyphicon-plus').addClass('glyphicon-minus');
			$("#recipients .glyphicon-minus:last").parent().removeClass('addressAdd').addClass('addressRemoveTo');
			$("#recipients .addressRemoveTo").unbind("");
			$("#recipients .addressRemoveTo").click(function(){
				$(this).parent().parent().fadeOut().remove();
				validateOutputAmount();
			});
			validateOutputAmount();
		}
	});

	$("#inputs .txidAdd").click(function(){
		var clone = '<div class="row inputs"><br>'+$(this).parent().parent().html()+'</div>';
		$("#inputs").append(clone);
		$("#inputs .txidClear:last").remove();
		$("#inputs .glyphicon-plus:last").removeClass('glyphicon-plus').addClass('glyphicon-minus');
		$("#inputs .glyphicon-minus:last").parent().removeClass('txidAdd').addClass('txidRemove');
		$("#inputs .txidRemove").unbind("");
		$("#inputs .txidRemove").click(function(){
			$(this).parent().parent().fadeOut().remove();
			totalInputAmount();
		});
		$("#inputs .row:last input").attr('disabled',false);

		$("#inputs .txIdAmount").unbind("").change(function(){
			totalInputAmount();
		}).keyup(function(){
			totalInputAmount();
		});

	});

	$("#transactionBtn").click(function(){
		var tx = boxxjs.transaction();
		var estimatedTxSize = 10; // <4:version><1:txInCount><1:txOutCount><4:nLockTime>

		$("#transactionCreate, #transactionCreateStatus").addClass("hidden");

		if(($("#nLockTime").val()).match(/^[0-9]+$/g)){
			tx.lock_time = $("#nLockTime").val()*1;
		}

		$("#inputs .row").removeClass('has-error');

		$('#putTabs a[href="#txinputs"], #putTabs a[href="#txoutputs"]').attr('style','');

		$.each($("#inputs .row"), function(i,o){
			if(!($(".txId",o).val()).match(/^[a-f0-9]+$/i)){
				$(o).addClass("has-error");
			} else if((!($(".txIdScript",o).val()).match(/^[a-f0-9]+$/i)) && $(".txIdScript",o).val()!=""){
				$(o).addClass("has-error");
			} else if (!($(".txIdN",o).val()).match(/^[0-9]+$/i)){
				$(o).addClass("has-error");
			}

			if(!$(o).hasClass("has-error")){
				var seq = null;
				if($("#txRBF").is(":checked")){
					seq = 0xffffffff-2;
				}

				var currentScript = $(".txIdScript",o).val();
				if (currentScript.match(/^76a914[0-9a-f]{40}88ac$/)) {
					estimatedTxSize += 147
				} else if (currentScript.match(/^5[1-9a-f](?:210[23][0-9a-f]{64}){1,15}5[1-9a-f]ae$/)) {
					// <74:persig <1:push><72:sig><1:sighash> ><34:perpubkey <1:push><33:pubkey> > <32:prevhash><4:index><4:nSequence><1:m><1:n><1:OP>
					var scriptSigSize = (parseInt(currentScript.slice(1,2),16) * 74) + (parseInt(currentScript.slice(-3,-2),16) * 34) + 43
					// varint 2 bytes if scriptSig is > 252
					estimatedTxSize += scriptSigSize + (scriptSigSize > 252 ? 2 : 1)
				} else {
					// underestimating won't hurt. Just showing a warning window anyways.
					estimatedTxSize += 147
				}

				tx.addinput($(".txId",o).val(), $(".txIdN",o).val(), $(".txIdScript",o).val(), seq);
			} else {
				$('#putTabs a[href="#txinputs"]').attr('style','color:#a94442;');
			}
		});

		$("#recipients .row").removeClass('has-error');

		$.each($("#recipients .row"), function(i,o){
			var a = ($(".address",o).val());
			var ad = boxxjs.addressDecode(a);
			if(((a!="") && (ad.version == boxxjs.pub || ad.version == boxxjs.multisig || ad.type=="bech32")) && $(".amount",o).val()!=""){ // address
				// P2SH output is 32, P2PKH is 34
				estimatedTxSize += (ad.version == boxxjs.pub ? 34 : 32)
				tx.addoutput(a, $(".amount",o).val());
			} else if (((a!="") && ad.version === 42) && $(".amount",o).val()!=""){ // stealth address
				// 1 P2PKH and 1 OP_RETURN with 36 bytes, OP byte, and 8 byte value
				estimatedTxSize += 78
				tx.addstealth(ad, $(".amount",o).val());
			} else if (((($("#opReturn").is(":checked")) && a.match(/^[a-f0-9]+$/ig)) && a.length<160) && (a.length%2)==0) { // data
				estimatedTxSize += (a.length / 2) + 1 + 8
				tx.adddata(a);
			} else { // neither address nor data
				$(o).addClass('has-error');
				$('#putTabs a[href="#txoutputs"]').attr('style','color:#a94442;');
			}
			// console.log(estimatedTxSize);
		});



		if(!$("#recipients .row, #inputs .row").hasClass('has-error')){

			$("#transactionCreate textarea").val(tx.serialize());
			$("#transactionCreate .txSize").html(tx.size());

			if($("#feesestnewtx").attr('est')=='y'){
				$("#fees .txhex").val($("#transactionCreate textarea").val());
				$("#feesAnalyseBtn").click();
				$("#fees .txhex").val("");
				window.location = "#fees";
			} else {

				$("#transactionCreate").removeClass("hidden");

				// Check fee against hard 0.0001 as well as fluid 200 satoshis per byte calculation.
				if( $("#transactionFee").val() > 0.0001 ){
					$("#modalWarningFeeAmount").html($("#transactionFee").val());
					$("#modalWarningFee").modal("show");
				}

				// Check Low fee against hard 0.001 as well as fluid 200 satoshis per byte calculation.
				if($("#transactionFee").val() < 0.0001 ){
					$("#modalLowFeeAmount").html($("#transactionFee").val());
					$("#modalLowFee").modal("show");
				}

			}
			$("#feesestnewtx").attr('est','');
		} else {
			$("#transactionCreateStatus").removeClass("hidden").html("One or more input or output is invalid").fadeOut().fadeIn();
		}
	});


	///////////////////////////////////////////////////////////

	$("#feesestnewtx").click(function(){
		$(this).attr('est','y');
		$("#transactionBtn").click();
	});

	$("#feesestwallet").click(function(){
		$(this).attr('est','y');
		var outputs = $("#walletSpendTo"+coinID+" .output").length;

		$("#fees .inputno, #fees .outputno, #fees .bytes").html(0);
		$("#fees .slider").val(0);

		var tx = boxxjs.transaction();
		tx.listUnspent($("#walletAddress"+coinID).html(), function(data){
			var inputs = $(data).find("unspent").children().length;
			if($("#walletSegwit"+coinID).is(":checked")){
				$("#fees .txi_segwit").val(inputs);
				$("#fees .txi_segwit").trigger('input');
			} else {
				$("#fees .txi_regular").val(inputs);
				$("#fees .txi_regular").trigger('input');
			}

			$.each($("#walletSpendTo"+coinID+" .output"), function(i,o){
				var addr = $('.addressTo',o);
				var ad = boxxjs.addressDecode(addr.val());
				if (ad.version == boxxjs.pub){ // p2pkh
					$("#fees .txo_p2pkh").val(($("#fees .txo_p2pkh").val()*1)+1);
					$("#fees .txo_p2pkh").trigger('input');
				} else { // p2psh
					$("#fees .txo_p2sh").val(($("#fees .txo_p2sh").val()*1)+1);
					$("#fees .txo_p2sh").trigger('input');
				}
			});

			if(($("#developerDonation").val()*1)>0){
				var addr = boxxjs.developer;
				var ad = boxxjs.addressDecode(addr);
				if (ad.version == boxxjs.pub){ // p2pkh
					$("#fees .txo_p2pkh").val(($("#fees .txo_p2pkh").val()*1)+1);
					$("#fees .txo_p2pkh").trigger('input');
				} else { // p2psh
					$("#fees .txo_p2sh").val(($("#fees .txo_p2sh").val()*1)+1);
					$("#fees .txo_p2sh").trigger('input');
				}
			}

		});

		//feeStats();
		window.location = "#fees";
	});

	$(".txidClear").click(function(){
		$("#inputs .row:first input").attr('disabled',false);
		$("#inputs .row:first input").val("");
		totalInputAmount();
	});

	$("#inputs .txIdAmount").unbind("").change(function(){
		totalInputAmount();
	}).keyup(function(){
		totalInputAmount();
	});

	$("#donateTxBtn").click(function(){

		var exists = false;

		$.each($("#recipients .address"), function(i,o){
			if($(o).val() == boxxjs.developer){
				exists = true;
				$(o).fadeOut().fadeIn();
				return true;
			}
		});

		if(!exists){
			if($("#recipients .recipient:last .address:last").val() != ""){
				$("#recipients .addressAddTo:first").click();
			};

			$("#recipients .recipient:last .address:last").val(boxxjs.developer).fadeOut().fadeIn();

			return true;
		}
	});

	/* code for the qr code scanner */

	$(".qrcodeScanner").click(function(){
		if ((typeof MediaStreamTrack === 'function') && typeof MediaStreamTrack.getSources === 'function'){
			MediaStreamTrack.getSources(function(sourceInfos){
				var f = 0;
				$("select#videoSource").html("");
				for (var i = 0; i !== sourceInfos.length; ++i) {
					var sourceInfo = sourceInfos[i];
					var option = document.createElement('option');
					option.value = sourceInfo.id;
					if (sourceInfo.kind === 'video') {
						option.text = sourceInfo.label || 'camera ' + ($("select#videoSource options").length + 1);
						$(option).appendTo("select#videoSource");
 					}
				}
			});

			$("#videoSource").unbind("change").change(function(){
				scannerStart()
			});

		} else {
			$("#videoSource").addClass("hidden");
		}
		scannerStart();
		$("#qrcode-scanner-callback-to").html($(this).attr('forward-result'));
	});

	function scannerStart(){
		navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || false;
		if(navigator.getUserMedia){
			if (!!window.stream) {
				$("video").attr('src',null);
				window.stream.stop();
  			}

			var videoSource = $("select#videoSource").val();
			var constraints = {
				video: {
					optional: [{sourceId: videoSource}]
				}
			};

			navigator.getUserMedia(constraints, function(stream){
				window.stream = stream; // make stream available to console
				var videoElement = document.querySelector('video');
				videoElement.src = window.URL.createObjectURL(stream);
				videoElement.play();
			}, function(error){ });

			QCodeDecoder().decodeFromCamera(document.getElementById('videoReader'), function(er,data){
				if(!er){
					var match = data.match(/^bzx\:([13][a-z0-9]{26,33})/i);
					var result = match ? match[1] : data;
					$(""+$("#qrcode-scanner-callback-to").html()).val(result);
					$("#qrScanClose").click();
				}
			});
		} else {
			$("#videoReaderError").removeClass("hidden");
			$("#videoReader, #videoSource").addClass("hidden");
		}
	}

	/* redeem from button code */

	///// BZX

	$("#redeemFromBtnbzx").click(function(){
		var redeem = redeemingFrom($("#redeemFrombzx").val());



		$("#redeemFromStatusbzx, #redeemFromAddressbzx").addClass('hidden');

		if(redeem.from=='multisigAddress'){
			$("#redeemFromStatusbzx").removeClass('hidden').html('<span class="glyphicon glyphicon-exclamation-sign"></span> You should use the redeem script, not the multisig address!');
			return false;
		}

		if(redeem.from=='other'){
			$("#redeemFromStatusbzx").removeClass('hidden').html('<span class="glyphicon glyphicon-exclamation-sign"></span> The private key you have entered is invalid');
			return false;
		}

		if($("#clearInputsOnLoad").is(":checked")){
			$("#inputs .txidRemove, #inputs .txidClear").click();
		}

		$("#redeemFromBtnbzx").html("Please wait, loading...").attr('disabled',true);

		//var host = $(this).attr('rel');

			listUnspentDefault(redeem);


		if($("#redeemFromStatusbzx").hasClass("hidden")) {
			// An ethical dilemma: Should we automatically set nLockTime?
			if(redeem.from == 'redeemScript' && redeem.decodedRs.type == "hodl__") {
				$("#nLockTime").val(redeem.decodedRs.checklocktimeverify);
			} else {
				$("#nLockTime").val(0);
			}
		}

            function loadAddress() {
            return new Promise(resolve => {
            setTimeout(() => {
            resolve('🤡');
            }, 300);
            });
            }

            async function wab() {
            const wab = await loadAddress();
            walletApiBalance();
            }
            wab();
		    checkBalanceLoop();
	});

	///// GXX

	$("#redeemFromBtngxx").click(function(){
		var redeem = redeemingFrom($("#redeemFromgxx").val());



		$("#redeemFromStatusgxx, #redeemFromAddressgxx").addClass('hidden');

		if(redeem.from=='multisigAddress'){
			$("#redeemFromStatusgxx").removeClass('hidden').html('<span class="glyphicon glyphicon-exclamation-sign"></span> You should use the redeem script, not the multisig address!');
			return false;
		}

		if(redeem.from=='other'){
			$("#redeemFromStatusgxx").removeClass('hidden').html('<span class="glyphicon glyphicon-exclamation-sign"></span> The private key you have entered is invalid');
			return false;
		}

		if($("#clearInputsOnLoad").is(":checked")){
			$("#inputs .txidRemove, #inputs .txidClear").click();
		}

		$("#redeemFromBtngxx").html("Please wait, loading...").attr('disabled',true);

		//var host = $(this).attr('rel');

			listUnspentDefault(redeem);


		if($("#redeemFromStatusgxx").hasClass("hidden")) {
			// An ethical dilemma: Should we automatically set nLockTime?
			if(redeem.from == 'redeemScript' && redeem.decodedRs.type == "hodl__") {
				$("#nLockTime").val(redeem.decodedRs.checklocktimeverify);
			} else {
				$("#nLockTime").val(0);
			}
		}

            function loadAddress() {
            return new Promise(resolve => {
            setTimeout(() => {
            resolve('🤡');
            }, 300);
            });
            }

            async function wab() {
            const wab = await loadAddress();
            walletApiBalance();
            }
            wab();
		    checkBalanceLoop();
	});


		///// BCZ

	$("#redeemFromBtnbcz").click(function(){
		var redeem = redeemingFrom($("#redeemFrombcz").val());



		$("#redeemFromStatusbcz, #redeemFromAddressbcz").addClass('hidden');

		if(redeem.from=='multisigAddress'){
			$("#redeemFromStatusbcz").removeClass('hidden').html('<span class="glyphicon glyphicon-exclamation-sign"></span> You should use the redeem script, not the multisig address!');
			return false;
		}

		if(redeem.from=='other'){
			$("#redeemFromStatusbcz").removeClass('hidden').html('<span class="glyphicon glyphicon-exclamation-sign"></span> The private key you have entered is invalid');
			return false;
		}

		if($("#clearInputsOnLoad").is(":checked")){
			$("#inputs .txidRemove, #inputs .txidClear").click();
		}

		$("#redeemFromBtnbcz").html("Please wait, loading...").attr('disabled',true);

		//var host = $(this).attr('rel');

			listUnspentDefault(redeem);


		if($("#redeemFromStatusbcz").hasClass("hidden")) {
			// An ethical dilemma: Should we automatically set nLockTime?
			if(redeem.from == 'redeemScript' && redeem.decodedRs.type == "hodl__") {
				$("#nLockTime").val(redeem.decodedRs.checklocktimeverify);
			} else {
				$("#nLockTime").val(0);
			}
		}

            function loadAddress() {
            return new Promise(resolve => {
            setTimeout(() => {
            resolve('🤡');
            }, 300);
            });
            }

            async function wab() {
            const wab = await loadAddress();
            walletApiBalance();
            }
            wab();
		    checkBalanceLoop();
	});



	/* function to determine what we are redeeming from */
	function redeemingFrom(string){
		var r = {};
		var decode = boxxjs.addressDecode(string);
		if(decode.version == boxxjs.pub){ // regular address
			r.addr = string;
			r.from = 'address';
			r.redeemscript = false;
		} else if (decode.version == boxxjs.priv){ // wif key
			var a = boxxjs.wif2address(string);

			r.addr = a['address'];
			r.from = 'wif';
			r.redeemscript = false;
		} else if (decode.version == boxxjs.multisig){ // mulisig address
			r.addr = '';
			r.from = 'multisigAddress';
			r.redeemscript = false;
		} else if(decode.type == 'bech32'){
			r.addr = string;
			r.from = 'bech32';
			r.decodedRs = decode.redeemscript;
			r.redeemscript = true;
		} else {
			var script = boxxjs.script();
			var decodeRs = script.decodeRedeemScript(string);
			if(decodeRs){ // redeem script
				r.addr = decodeRs['address'];
				r.from = 'redeemScript';
				r.decodedRs = decodeRs.redeemscript;
				r.redeemscript = true;
			} else { // something else
				r.addr = '';
				r.from = 'other';
				r.redeemscript = false;
			}
		}
		return r;
	}



	/* global function to add outputs to page */
	function addOutput(tx, n, script, amount) {
		if(tx){
			if($("#inputs .txId:last").val()!=""){
				$("#inputs .txidAdd").click();
			}

			$("#inputs .row:last input").attr('disabled',true);

			var txid = ((tx).match(/.{1,2}/g).reverse()).join("")+'';

			$("#inputs .txId:last").val(txid);
			$("#inputs .txIdN:last").val(n);
			$("#inputs .txIdAmount:last").val(amount);

			if(((script.match(/^00/) && script.length==44)) || (script.length==40 && script.match(/^[a-f0-9]+$/gi))){
				s = boxxjs.script();
				s.writeBytes(Crypto.util.hexToBytes(script));
				s.writeOp(0);
				s.writeBytes(boxxjs.numToBytes((amount*100000000).toFixed(0), 8));
				script = Crypto.util.bytesToHex(s.buffer);
			}

			$("#inputs .txIdScript:last").val(script);
		}
	}


/* JSON	*/
	/* retrieve unspent data JSON */
	function listUnspentDefault(redeem){
		$("#walletAddress"+coinID).html(redeem.addr);
		input_count = 0;
		$.ajax ({
			type: "GET",
			url: "https://apixx.ovh/?s="+coinID+"&q=listunspent&a="+redeem.addr,
			dataType: "json",
			error: function(data) {
				$("#redeemFromStatus").removeClass('hidden').html('<span class="glyphicon glyphicon-exclamation-sign"></span> Unexpected error, unable to retrieve unspent outputs!');
			},
			success: function(data) {
				if((data.status && data.data) && data.status=='success'){
					//$("#walletAddress"+coinID).html(redeem.addr);
					for(var i in data.data.txs){

						var o = data.data.txs[i];
						var tx = ((""+o.txid).match(/.{1,2}/g).reverse()).join("")+'';
						if(tx.match(/^[a-f0-9]+$/)){
							input_count = input_count + 1;
							var n = o.output_no;
							var script = (redeem.redeemscript==true) ? redeem.decodedRs : o.script_hex;
							var amount = o.value;
							addOutput(tx, n, script, amount);
						}
					}
				} else {
					
					$("#redeemFromStatus").removeClass('hidden').html('<span class="glyphicon glyphicon-exclamation-sign"></span> Unexpected error, unable to retrieve unspent outputs.');
				}
			},
			complete: function(data, status) {
				$("#redeemFromBtn").html("Load").attr('disabled',false);
				//$("#walletAddress"+coinID).html(redeem.addr);
				totalInputAmount();

				/*  CALCULATE SIZE OF TRANSACTION  */

				// console.log("total unspents: "+input_count);
				var newfee;
				var txbytes = (input_count * 148) + (2 * 34) + 4 + 4 + input_count;
				// console.log("transaction in bytes: "+txbytes);

				if(txbytes >= 1000){

				if(coinID == 'bcz'){
				newfee = parseFloat(txbytes * 10)/100000000;
				                     document.getElementById("txFee"+coinID).value = newfee;
									 }

				else if(coinID == 'bzx'){
				newfee = parseFloat(txbytes * 100)/100000000;
				                     document.getElementById("txFee"+coinID).value = newfee;
									 }
				else if(coinID == 'gxx'){
				newfee = parseFloat(txbytes * 10)/100000000;
				                     document.getElementById("txFee"+coinID).value = newfee;
									 }
				}
				}
			});
		}




	/* math to calculate the inputs and outputs */

	function totalInputAmount(){
		$("#totalInput").html('0.00');
		$.each($("#inputs .txIdAmount"), function(i,o){
			if(isNaN($(o).val())){
				$(o).parent().addClass('has-error');
			} else {
				$(o).parent().removeClass('has-error');
				var f = 0;
				if(!isNaN($(o).val())){
					f += $(o).val()*1;
				}
				$("#totalInput").html((($("#totalInput").html()*1) + (f*1)).toFixed(8));
			}
		});
		totalFee();
	}

	function validateOutputAmount(){
		$("#recipients .amount").unbind('');
		$("#recipients .amount").keyup(function(){
			if(isNaN($(this).val())){
				$(this).parent().addClass('has-error');
			} else {
				$(this).parent().removeClass('has-error');
				var f = 0;
				$.each($("#recipients .amount"),function(i,o){
					if(!isNaN($(o).val())){
						f += $(o).val()*1;
					}
				});
				$("#totalOutput").html((f).toFixed(8));
			}
			totalFee();
		}).keyup();
	}

	function totalFee(){
		var fee = (($("#totalInput").html()*1) - ($("#totalOutput").html()*1)).toFixed(8);
		$("#transactionFee").val((fee>0)?fee:'0.00');
	}

	$(".optionsCollapse").click(function(){
		if($(".optionsAdvanced",$(this).parent()).hasClass('hidden')){
			$(".glyphcollapse",$(this).parent()).removeClass('glyphicon-collapse-down').addClass('glyphicon-collapse-up');
			$(".optionsAdvanced",$(this).parent()).removeClass("hidden");
		} else {
			$(".glyphcollapse",$(this).parent()).removeClass('glyphicon-collapse-up').addClass('glyphicon-collapse-down');
			$(".optionsAdvanced",$(this).parent()).addClass("hidden");
		}
	});

	/* broadcast a transaction */

	$("#rawSubmitBtn").click(function(){
		rawSubmitDefault(this);
	});


	/* verify script code */

	$("#verifyBtn").click(function(){
		$(".verifyData").addClass("hidden");
		$("#verifyStatus").hide();
		if(!decodeRedeemScript()){
			if(!decodeTransactionScript()){
				if(!decodePrivKey()){
					if(!decodePubKey()){
						if(!decodeHDaddress()){
							$("#verifyStatus").removeClass('hidden').fadeOut().fadeIn();
						}
					}
				}
			}
		}

	});

	function decodeRedeemScript(){
		var script = boxxjs.script();
		var decode = script.decodeRedeemScript($("#verifyScript").val());
		if(decode){
			$("#verifyRsDataMultisig").addClass('hidden');
			$("#verifyRsDataHodl").addClass('hidden');
			$("#verifyRsDataSegWit").addClass('hidden');
			$("#verifyRsData").addClass("hidden");


			if(decode.type == "multisig__") {
				$("#verifyRsDataMultisig .multisigAddress").val(decode['address']);
				$("#verifyRsDataMultisig .signaturesRequired").html(decode['signaturesRequired']);
				$("#verifyRsDataMultisig table tbody").html("");
				for(var i=0;i<decode.pubkeys.length;i++){
					var pubkey = decode.pubkeys[i];
					var address = boxxjs.pubkey2address(pubkey);
					$('<tr><td width="30%"><input type="text" class="form-control" value="'+address+'" readonly></td><td><input type="text" class="form-control" value="'+pubkey+'" readonly></td></tr>').appendTo("#verifyRsDataMultisig table tbody");
				}
				$("#verifyRsData").removeClass("hidden");
				$("#verifyRsDataMultisig").removeClass('hidden');
				$(".verifyLink").attr('href','?verify='+$("#verifyScript").val());
				return true;
			} else if(decode.type == "segwit__"){
				$("#verifyRsData").removeClass("hidden");
				$("#verifyRsDataSegWit .segWitAddress").val(decode['address']);
				$("#verifyRsDataSegWit").removeClass('hidden');
				return true;
			} else if(decode.type == "hodl__") {
				var d = $("#verifyRsDataHodl .date").data("DateTimePicker");
				$("#verifyRsDataHodl .address").val(decode['address']);
				$("#verifyRsDataHodl .pubkey").val(boxxjs.pubkey2address(decode['pubkey']));
				$("#verifyRsDataHodl .date").val(decode['checklocktimeverify'] >= 500000000? moment.unix(decode['checklocktimeverify']).format("MM/DD/YYYY HH:mm") : decode['checklocktimeverify']);
				$("#verifyRsData").removeClass("hidden");
				$("#verifyRsDataHodl").removeClass('hidden');
				$(".verifyLink").attr('href','?verify='+$("#verifyScript").val());
				return true;
			}
		}
		return false;
	}

	function decodeTransactionScript(){
		var tx = boxxjs.transaction();
		try {
			var decode = tx.deserialize($("#verifyScript").val());
			$("#verifyTransactionData .transactionVersion").html(decode['version']);
			$("#verifyTransactionData .transactionSize").html(decode.size()+' <i>bytes</i>');
			$("#verifyTransactionData .transactionLockTime").html(decode['lock_time']);
			$("#verifyTransactionData .transactionRBF").hide();
			$("#verifyTransactionData .transactionSegWit").hide();
			if (decode.witness.length>=1) {
				$("#verifyTransactionData .transactionSegWit").show();
			}
			$("#verifyTransactionData").removeClass("hidden");
			$("#verifyTransactionData tbody").html("");

			var h = '';
			$.each(decode.ins, function(i,o){
				var s = decode.extractScriptKey(i);
				h += '<tr>';
				h += '<td><input class="form-control" type="text" value="'+o.outpoint.hash+'" readonly></td>';
				h += '<td class="col-xs-1">'+o.outpoint.index+'</td>';
				h += '<td class="col-xs-2"><input class="form-control" type="text" value="'+Crypto.util.bytesToHex(o.script.buffer)+'" readonly></td>';
				h += '<td class="col-xs-1"> <span class="glyphicon glyphicon-'+((s.signed=='true' || (decode.witness[i] && decode.witness[i].length==2))?'ok':'remove')+'-circle"></span>';
				if(s['type']=='multisig' && s['signatures']>=1){
					h += ' '+s['signatures'];
				}
				h += '</td>';
				h += '<td class="col-xs-1">';
				if(s['type']=='multisig'){
					var script = boxxjs.script();
					var rs = script.decodeRedeemScript(s.script);
					h += rs['signaturesRequired']+' of '+rs['pubkeys'].length;
				} else {
					h += '<span class="glyphicon glyphicon-remove-circle"></span>';
				}
				h += '</td>';
				h += '</tr>';

				//debug
				if(parseInt(o.sequence)<(0xFFFFFFFF-1)){
					$("#verifyTransactionData .transactionRBF").show();
				}
			});

			$(h).appendTo("#verifyTransactionData .ins tbody");

			h = '';
			$.each(decode.outs, function(i,o){

				if(o.script.chunks.length==2 && o.script.chunks[0]==106){ // OP_RETURN

					var data = Crypto.util.bytesToHex(o.script.chunks[1]);
					var dataascii = hex2ascii(data);

					if(dataascii.match(/^[\s\d\w]+$/ig)){
						data = dataascii;
					}

					h += '<tr>';
					h += '<td><input type="text" class="form-control" value="(OP_RETURN) '+data+'" readonly></td>';
					h += '<td class="col-xs-1">'+(o.value/100000000).toFixed(8)+'</td>';
					h += '<td class="col-xs-2"><input class="form-control" type="text" value="'+Crypto.util.bytesToHex(o.script.buffer)+'" readonly></td>';
					h += '</tr>';
				} else {

					var addr = '';
					if(o.script.chunks.length==5){
						addr = boxxjs.scripthash2address(Crypto.util.bytesToHex(o.script.chunks[2]));
					} else if((o.script.chunks.length==2) && o.script.chunks[0]==0){
						addr = boxxjs.bech32_encode(boxxjs.bech32.hrp, [boxxjs.bech32.version].concat(boxxjs.bech32_convert(o.script.chunks[1], 8, 5, true)));
					} else {
						var pub = boxxjs.pub;
						boxxjs.pub = boxxjs.multisig;
						addr = boxxjs.scripthash2address(Crypto.util.bytesToHex(o.script.chunks[1]));
						boxxjs.pub = pub;
					}

					h += '<tr>';
					h += '<td><input class="form-control" type="text" value="'+addr+'" readonly></td>';
					h += '<td class="col-xs-1">'+(o.value/100000000).toFixed(8)+'</td>';
					h += '<td class="col-xs-2"><input class="form-control" type="text" value="'+Crypto.util.bytesToHex(o.script.buffer)+'" readonly></td>';
					h += '</tr>';
				}
			});
			$(h).appendTo("#verifyTransactionData .outs tbody");

			$(".verifyLink").attr('href','?verify='+$("#verifyScript").val());
			return true;
		} catch(e) {
			return false;
		}
	}

	function hex2ascii(hex) {
		var str = '';
		for (var i = 0; i < hex.length; i += 2)
			str += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
		return str;
	}

	function decodePrivKey(){
		var wif = $("#verifyScript").val();
		if(wif.length==51 || wif.length==52){
			try {
				var w2address = boxxjs.wif2address(wif);
				var w2pubkey = boxxjs.wif2pubkey(wif);
				var w2privkey = boxxjs.wif2privkey(wif);

				$("#verifyPrivKey .address").val(w2address['address']);
				$("#verifyPrivKey .pubkey").val(w2pubkey['pubkey']);
				$("#verifyPrivKey .privkey").val(w2privkey['privkey']);
				$("#verifyPrivKey .iscompressed").html(w2address['compressed']?'true':'false');

				$("#verifyPrivKey").removeClass("hidden");
				return true;
			} catch (e) {
				return false;
			}
		} else {
			return false;
		}
	}

	function decodePubKey(){
		var pubkey = $("#verifyScript").val();
		if(pubkey.length==66 || pubkey.length==130){
			try {
				$("#verifyPubKey .verifyDataSw").addClass('hidden');
				$("#verifyPubKey .address").val(boxxjs.pubkey2address(pubkey));
				if(pubkey.length == 66){
					var sw = boxxjs.segwitAddress(pubkey);
					$("#verifyPubKey .addressSegWit").val(sw.address);
					$("#verifyPubKey .addressSegWitRedeemScript").val(sw.redeemscript);

					var b32 = boxxjs.bech32Address(pubkey);
					$("#verifyPubKey .addressBech32").val(b32.address);
					$("#verifyPubKey .addressBech32RedeemScript").val(b32.redeemscript);

					$("#verifyPubKey .verifyDataSw").removeClass('hidden');
				}
				$("#verifyPubKey").removeClass("hidden");
				$(".verifyLink").attr('href','?verify='+$("#verifyScript").val());
				return true;
			} catch (e) {
				return false;
			}
		} else {
			return false;
		}
	}


	/* sign code */

	$("#signBtn").click(function(){
		var wifkey = $("#signPrivateKey");
		var script = $("#signTransaction");

		if(boxxjs.addressDecode(wifkey.val())){
			$(wifkey).parent().removeClass('has-error');
		} else {
			$(wifkey).parent().addClass('has-error');
		}

		if((script.val()).match(/^[a-f0-9]+$/ig)){
			$(script).parent().removeClass('has-error');
		} else {
			$(script).parent().addClass('has-error');
		}

		if($("#sign .has-error").length==0){
			$("#signedDataError").addClass('hidden');
			try {
				var tx = boxxjs.transaction();
				var t = tx.deserialize(script.val());

				var signed = t.sign(wifkey.val(), $("#sighashType option:selected").val());
				$("#signedData textarea").val(signed);
				$("#signedData .txSize").html(t.size());
				$("#signedData").removeClass('hidden').fadeIn();
			} catch(e) {
				// // console.log(e);
			}
		} else {
			$("#signedDataError").removeClass('hidden');
			$("#signedData").addClass('hidden');
		}
	});

	$("#sighashType").change(function(){
		$("#sighashTypeInfo").html($("option:selected",this).attr('rel')).fadeOut().fadeIn();
	});

	$("#signAdvancedCollapse").click(function(){
		if($("#signAdvanced").hasClass('hidden')){
			$("span",this).removeClass('glyphicon-collapse-down').addClass('glyphicon-collapse-up');
			$("#signAdvanced").removeClass("hidden");
		} else {
			$("span",this).removeClass('glyphicon-collapse-up').addClass('glyphicon-collapse-down');
			$("#signAdvanced").addClass("hidden");
		}
	});

	/* page load code */

	function _get(value) {
		var dataArray = (document.location.search).match(/(([a-z0-9\_\[\]]+\=[a-z0-9\_\.\%\@]+))/gi);
		var r = [];
		if(dataArray) {
			for(var x in dataArray) {
				if((dataArray[x]) && typeof(dataArray[x])=='string') {
					if((dataArray[x].split('=')[0].toLowerCase()).replace(/\[\]$/ig,'') == value.toLowerCase()) {
						r.push(unescape(dataArray[x].split('=')[1]));
					}
				}
			}
		}
		return r;
	}

	var _getBroadcast = _get("broadcast");
	if(_getBroadcast[0]){
		$("#rawTransaction").val(_getBroadcast[0]);
		$("#rawSubmitBtn").click();
		window.location.hash = "#broadcast";
	}

	var _getVerify = _get("verify");
	if(_getVerify[0]){
		$("#verifyScript").val(_getVerify[0]);
		$("#verifyBtn").click();
		window.location.hash = "#verify";
	}

	$('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
		if(e.target.hash == "#fees"){
			feeStats();
		}
	})

	$(".qrcodeBtn").click(function(){
		$("#qrcode").html("");
		var thisbtn = $(this).parent().parent();
		var qrstr = false;
		var ta = $("textarea",thisbtn);

		if(ta.length>0){
			var w = (screen.availWidth > screen.availHeight ? screen.availWidth : screen.availHeight)/3;
			var qrcode = new QRCode("qrcode", {width:w, height:w});
			qrstr = $(ta).val();
			if(qrstr.length > 1024){
				$("#qrcode").html("<p>Sorry the data is too long for the QR generator.</p>");
			}
		} else {
			var qrcode = new QRCode("qrcode");
			qrstr = coinID+":"+$('#newAddress'+coinID,thisbtn).val();
		}

		if(qrstr){
			qrcode.makeCode(qrstr);
		}
	});

	$('input[title!=""], abbr[title!=""]').tooltip({'placement':'bottom'});

	if (location.hash !== ''){
		$('a[href="' + location.hash + '"]').tab('show');
	}

	$(".showKey").click(function(){
		$("input[type='password']",$(this).parent().parent()).attr('type','text');
	});







	for(i=1;i<3;i++){
		$(".pubkeyAdd").click();
	}

	validateOutputAmount();

	/* settings page code */

	$("#boxxjs_pub").val('0x'+(boxxjs.pub).toString(16));
	$("#boxxjs_priv").val('0x'+(boxxjs.priv).toString(16));
	$("#boxxjs_multisig").val('0x'+(boxxjs.multisig).toString(16));

	$("#boxxjs_hdpub").val('0x'+(boxxjs.hdkey.pub).toString(16));
	$("#boxxjs_hdprv").val('0x'+(boxxjs.hdkey.prv).toString(16));

	$("#settingsBtn").click(function(){

		// log out of openwallet
		$("#walletLogout"+coinID).click();

		$("#statusSettings").removeClass("alert-success").removeClass("alert-danger").addClass("hidden").html("");
		$("#settings .has-error").removeClass("has-error");

		$.each($(".boxxjssetting"),function(i, o){
			if(!$(o).val().match(/^0x[0-9a-f]+$/)){
				$(o).parent().addClass("has-error");
			}
		});

		if($("#settings .has-error").length==0){

			boxxjs.pub =  $("#boxxjs_pub").val()*1;
			boxxjs.priv =  $("#boxxjs_priv").val()*1;
			boxxjs.multisig =  $("#boxxjs_multisig").val()*1;

			boxxjs.hdkey.pub =  $("#boxxjs_hdpub").val()*1;
			boxxjs.hdkey.prv =  $("#boxxjs_hdprv").val()*1;

			configureBroadcast();
			configureGetUnspentTx();

			$("#statusSettings").addClass("alert-success").removeClass("hidden").html("<span class=\"glyphicon glyphicon-ok\"></span> Settings updates successfully").fadeOut().fadeIn();
		} else {
			$("#statusSettings").addClass("alert-danger").removeClass("hidden").html("There is an error with one or more of your settings");
		}
	});

	$("#boxxjs_coin").change(function(){

		var o = ($("option:selected",this).attr("rel")).split(";");

		// deal with broadcasting settings
		if(o[5]=="false"){
			$("#boxxjs_broadcast, #rawTransaction, #rawSubmitBtn, #openBtn").attr('disabled',true);
			$("#boxxjs_broadcast").val("coinb.in");
		} else {
			$("#boxxjs_broadcast").val(o[5]);
			$("#boxxjs_broadcast, #rawTransaction, #rawSubmitBtn, #openBtn").attr('disabled',false);
		}

		// deal with unspent output settings
		if(o[6]=="false"){
			$("#boxxjs_utxo, #redeemFrom"+coinID+", #redeemFromBtn"+coinID+", #openBtn, .qrcodeScanner"+coinID).attr('disabled',true);
			$("#boxxjs_utxo").val("coinb.in");
		} else {
			$("#boxxjs_utxo").val(o[6]);
			$("#boxxjs_utxo, #redeemFrom"+coinID+", #redeemFromBtn"+coinID+", #openBtn, .qrcodeScanner"+coinID).attr('disabled',false);
		}

		// deal with the reset
		$("#boxxjs_pub").val(o[0]);
		$("#boxxjs_priv").val(o[1]);
		$("#boxxjs_multisig").val(o[2]);
		$("#boxxjs_hdpub").val(o[3]);
		$("#boxxjs_hdprv").val(o[4]);

		// hide/show custom screen
		if($("option:selected",this).val()=="custom"){
			$("#settingsCustom").removeClass("hidden");
		} else {
			$("#settingsCustom").addClass("hidden");
		}
	});

	function configureBroadcast(){
		var host = "bitcoinzero.net";
		$("#rawSubmitBtn").unbind("");
		if(host=="chain.so_bitcoinmainnet"){
			$("#rawSubmitBtn").click(function(){
				rawSubmitChainso_BitcoinMainnet(this);
			});
		} else if(host=="chain.so_dogecoin"){
			$("#rawSubmitBtn").click(function(){
				rawSubmitchainso_dogecoin(this);
			});
		} else if(host=="bitcoinzerox.net"){
			$("#rawSubmitBtn").click(function(){
				rawSubmitbzx(this);
			});
		} else if(host=="blockcypher_bitcoinmainnet"){
			$("#rawSubmitBtn").click(function(){
				rawSubmitblockcypher_BitcoinMainnet(this);
			});
		} else if(host=="cryptoid.info_carboncoin"){
			$("#rawSubmitBtn").click(function(){
				rawSubmitcryptoid_Carboncoin(this);
			});
		} else {
			$("#rawSubmitBtn").click(function(){
				rawSubmitDefault(this); // revert to default
			});
		}
	}

	function configureGetUnspentTx(){
		$("#redeemFromBtn").attr('rel',$("#boxxjs_utxo option:selected").val());
	}


});
