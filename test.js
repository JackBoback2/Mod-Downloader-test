var Mods = []
function Push(elm) {
Mods.push(elm)
}

Push('Mod1')
Push('Mod2')
Push('Mod3')

var i = Mods.length
var num = 0
for (i = Mods.length; num > i; num++) {
    localStorage.setItem('Mod' + num, Mods[num])
    }
