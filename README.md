<html>
	<head>
		<link rel="stylesheet" type="text/css" href="interface.css" />
	</head>
	<body>
	
	<h1>Gosho</h1>
	
	<hr>
	
	    <br />
		<br />
		
<div id="manas">
	<div id="manasContainer">
		<div id="basicManasContainer">
			<h3>Mana</h3>
			<table id="basicManas">	
			
		<tr>
		<td><button onclick="manaClick(1)">Harness Mana</button></td>
		<td>Mana: </td>
		<td class="number"><span id="mana">0</span></td>
		<td class="icon"><img src="Fire.png" class="icon icon-lg" /></td>
		</tr>		
        </table>

	
<div id="mages">
	<div id="magesContainer">
		<div id="basicMagesContainer">
			<h3>Mages</h3>
			<table id="basicMages">	
			
		<tr>
		<td><button onclick="buyOgunmage()">Train Fire Mage</button> </td>
		<td>Fire Mages: </td> 
		<td class="number"><span id="ogunmage">0</span></td>
		<td class="icon"><img src="Fire.png" class="icon icon-lg" /></td>

		</tr>
				<td>Fire mage Cost: <span id="ogunmageCost">10</span></td>
		<tr>
		<td><button onclick="buyLedmage()">Train Ice Mage</button></td>
		<td>Ice Mages: </td>
		<td class="number"><span id="ledmage">0</span></td>
		<td class="icon"><img src="Ice.png" class="icon icon-lg" /></td>
		</tr>
				<td>Ice mage Cost: <span id="ledmageCost">10</span></td>
		<tr>
		<td><button onclick="buyZemqmage()">Train Earth Mage</button></td>
		<td>Earth Mages: </td>
		<td class="number"><span id="zemqmage">0</span></td>
		<td class="icon"><img src="Earth.png" class="icon icon-lg" /></td>
		</tr>
				<td>Earth mage Cost: <span id="zemqmageCost">10</span></td>
		</table>



<div id="Elements">
	<div id="elementsContainer">
		<div id="elementsManasContainer">
			<h3>Elements</h3>
			<table id="basicelements">	
	<tr>
	<button onclick="buyOgun()">Buy Cursor</button>
		<br />
		Cursors: <span id="ogun">0</span>
		<br />
		Cursor Cost: <span id="ogunCost">10</span>
		</tr>		
        </table>
		
		<script type="text/javascript" src="main.js"></script>
		
	</body>
</html>
