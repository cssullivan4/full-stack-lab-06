var h3; 
var accusation = 'Accusation';
var friends = ['Heidi','Sean','Edi','Madeline','Zdravka'];
var locations = ['bathroom', "art therapist's panic room", 'reptile room', 'Chamber of Secrets', 'balcony at the top of the Eiffel Tower', 'West Side Highway dog park', 'discotheque', 'Room of Requirements', 'detention', 'somewhere in Brooklyn'];
var impaler = ['"their special friend"', 'a Bop-It!', 'internet rage', 'a trio of spinning, red turtle shells', 'their false sense of confidence', 'their cheap acrylic nails', 'an aging George Foreman grill', "Liza Minnelli's box of wigs", 'a baguette, smashing around', 'copy machine above their head', 'gas station corn dogs', 'one old boot', "Will Smith's-failed-Oscar-noms-tears", 'the fury of a 1000 capybaras', 'Sailor Jupitor talking smack about Moon', 'their eyes shut, spinning and yelling', 'a revealing turtle neck', ' themselves upwind of me releasing noxious gas with a creeping smile', 'a dangerous imagination', 'Kelly Clarkson CDs'];

// USING BIND //

/*
for (var i = 0; i < 100; i++) {
    var h3 = document.createElement('h3');
    h3.innerText = 'Accusation' + (i + 1);
    h3.addEventListener('click', function() {
        var friend = friends[this % friends.length]; // WRAPPING BACK TO START OF INDEX LIST
        var location = locations[this % locations.length];
        var weapon = impaler[this % impaler.length];
        alert('Accusation ' + (this + 1) + ': I accuse ' + friend + ' with ' + weapon + ' in the ' + location + '!!');
    }.bind(i)); // i NOW this, MUST GO ABOVE & CHANGE ABOVE i TO this
    document.body.appendChild(h3);
}
*/

// USING CLOSURE //

/*
function createHeading(num) {
    var h3 = document.createElement('h3');
    h3.innerText = 'Accusation ' + (num + 1);
    h3.addEventListener('click', function () {
        var friend = friends[num % friends.length];
        var location = locations[num % locations.length];
        var weapon = impaler[num % impaler.length];
        alert('Accusation ' + (num + 1) + ': I accuse ' + friend + ' with ' + weapon + ' in the ' + location + '!!');
    });
    document.body.appendChild(h3);
}

for (var i = 0; i < 100; i++) {
    createHeading(i); // LOOKING AT LOCAL VARIABLE IN THIS FUNCTION
} */


// USING A CLOSURE
// num ALWAYS LOCKED TO PARAMETER, WHICH WILL BE EVERY TIME BUTTON CLICKED

/*
function createAlerter(num) {
    return function () {
        var friend = friends[num % friends.length];
        var location = locations[num % locations.length];
        var weapon = impaler[num % imapler.length];
        alert('Accusation ' + (num + 1) + ': I accuse ' + friend + ' with ' + weapon + ' in the ' + location + '!!');
    }
}

for (var i = 0; i < 100; i++) {
    var h3 = document.createElement('h3')
    h3.innerText = 'Accusation ' + (i + 1);
    var alerter = createAlerter(i);
    h3.addEventListener('click', alerter);
    document.body.appendChild(h3);
}
*/