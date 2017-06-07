var h3; 
var accusation = 'Accusation';
var num = '#';
var friend = ['Heidi','Sean','Edi','Madeline','Zdravka'];
var arrLocation = ['bathroom', 'art therapist\s panic room', 'reptile room', 'Chamber of Secrets', 'balcony at the top of the Eiffel Tower', 'West Side Highway dog park', 'discotheque', 'Room of Requirements', 'detention', 'somewhere in Brooklyn'];
var impaler = ['"their special friend"', 'a Bop-It!', 'internet rage', 'a trio of spinning, red turtle shells', 'their false sense of confidence', 'their cheap acrylic nails', 'an aging George Foreman grill', "Liza Minnelli's box of wigs", 'a baguette, smashing around', 'copy machine above their head', 'gas station corn dogs', 'one old boot', "Will Smith's-failed-Oscar-noms-tears", 'the fury of a 1000 capybaras', 'Sailor Jupitor talking smack about Moon', 'their eyes shut, spinning and yelling', 'a revealing turtle neck', ' themselves upwind of me releasing noxious gas with a creeping smile', 'a dangerous imagination', 'Kelly Clarkson CDs'];

function listDownAccusers(num) {
    var h3 = document.createElement('h3');
    h3.innerText = 'Accusation ' + (num + 1);
    h3.addEventListener('click', function () {
        var who = friend[num % friend.length];
        var what = impaler[num % impaler.length];
        var where = arrLocation[num % arrLocation.length];
        alert('Accusation ' + (num + 1) + ': I accuse ' + who + ' with ' + what + ' in the ' + where + '!!');
    });
    document.body.appendChild(h3);
}

for (var i = 0; i < 100; i++) {
    listDownAccusers(i);
}