const abnsToBlock = {
	10152120: true
}

function GunnoFix(mod) {
	
	mod.hook("S_ABNORMALITY_BEGIN", mod.majorPatchVersion <= 106 ? 4 : 5, { "order": 999999997, "filter": { "fake": null } }, (event) => {
		return (abnsToBlock[event.id] && mod.game.me.is(event.target)) ? false : undefined;
	});
}

exports.NetworkMod = GunnoFix;