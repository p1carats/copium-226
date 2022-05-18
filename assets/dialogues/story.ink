VAR isTutorialWon = false
VAR isMiniGame1Won = false
VAR ifQuota1Respected = false
VAR georgeRelationCraig = false
VAR georgeRelationAmber = false
VAR isMiniGame4Won = false

-> INTRO

=== INTRO ===
Bip. Bip. Bip. Bip. Bip. Bip. Bip. Bi-
Après avoir cherché pendant une dizaine de secondes, j'attrape enfin mon téléphone et coupe le réveil. J'ouvre un demi-œil pour confirmer ce que je sais déjà.
George: 5h30. Encore une belle journée qui commence...
Je me lève lentement de mon lit et tâtonne dans le noir vers ma fenêtre.
En chemin, je me cogne le pied contre la chaise de mon bureau et manque de tomber. 
George: Ah, put-
En y réfléchissant, ce serait probablement plus simple d'allumer la lumière, mais à cette heure-là Benoît est en train de finir sa première fournée de pain et siphonne quasiment toute l'énergie du réseau pour lui.
George: Si son four s'arrête en pleine cuisson, ça va encore retomber sur moi...
Je soupire et finis par arriver à ma fenêtre. J'ouvre mes volets, laissant un peu de lumière entrer dans ma petite chambre.
Je reste là quelques instants, à observer le paysage et le soleil qui se lève tranquillement.
George: Bon, il est temps de se mettre en route.
// sur la route
Mon nom est George, je suis un ingénieur fraîchement diplômé et ceci est mon village natal qui porte le doux nom de Vitry-la-Vallée. Perdu au fin fond des montagnes servant de frontière naturelle entre le Fanighastan et le Lorient, dire que ce village est isolé du reste du monde est un euphémisme. Ses 27 habitants sont quasiment autosuffisants, autant par choix que par nécessité : la seule route menant au village est impraticable pour un véhicule normal à peu près 11 mois sur 12.
Que fait un ingénieur comme moi ici, alors ? Eh bien, parce que c'est mon village natal! J'ai dû le quitter vers l'âge des 10 ans pour avoir une éducation correcte, mais j'ai toujours voulu revenir: ce village, perdu au milieu des neiges et de la nature, c'est ma maison ! 
C'est donc ce que j'ai fait. Une fois mes études finies, je suis revenu à la première occasion. Et autant dire que c'était le bon moment...
-> TUTORIAL

=== TUTORIAL ===
// George arrive à sa station de travail
Le réseau électrique de la ville est particulier. A cause de l'isolement du village, il n'est relié à aucun réseau national et est géré entièrement en interne via cette station. Les quelques éoliennes présentes dans la région, généreusement financées par un philanthrope Lorientais, servent d'unique source de production d'électricité du réseau et doivent être contrôlées manuellement via la console en face de moi.
Ce travail était assuré par mon prédécesseur M. Pichard mais, du haut de ses 86 ans, cela devenait de plus en plus difficile pour lui d'assurer le bon fonctionnement du réseau. Sans mon arrivée, il aurait sans doute été forcé d'arrêter après quelques mois, et le village se serait retrouvé dans le noir total pendant qui sait combien de temps.
Infos à mettre sur les éoliennes.
George: Bon, j'ai assez rêvassé comme ça. Faut que je me mette au boulot si je veux atteindre le quota aujourd'hui.
Bienvenue dans la salle de contrôle. L\'objectif ici est de tenir le temps imparti en ayant tous les boutons en position pressés. Si un bouton est relevé, vous devez simplement cliquer dessus. Attention à ne pas être trop lent...
-> CHAPTER_1

=== CHAPTER_1 ===
// George arrive au café du village
Ma journée de travail finie, je décide comme d'habitude d'aller au café du village avant de rentrer. C'est un peu une tradition au village : la majorité des habitants se retrouvent là le soir, pour discuter, boire un coup et à l'occasion regarder un match de foot ou de rugby. Le fait que Gérard, le gérant du café, possède la seule télé du village, qu'il n'y a pas de wifi et qu'on capte mal la 4G dans la vallée aide certainement à attirer les plus récalcitrant au contact humain.
J'ouvre la porte du café, et la majorité des personnes déjà présentes tournent le regard vers moi.
{ isTutorialWon:
	<> Je les salue d'un petit mouvement de tête avant d'aller au comptoir, m'asseoir à ma place habituelle, laissée libre. L'avantage de vivre dans une petite communauté. 
- else:
	<> Je commence à m'avancer vers le comptoir, mais les regards insistants des autres clients me clouent sur place. Ce n'est pas compliqué de deviner ce qu'ils pensent : tout à l'heure une forte bourrasque de vent a traversé la vallée et je n'ai pas réagi assez vite. Une des éoliennes s'est emballée et j'ai été forcé de tout couper pendant plusieurs heures le temps que j'aille vérifier l'étendue des dégâts.
	Heureusement les dégâts étaient minimes et j'ai pu tout réparer, mais le mal a été fait: j'ai perdu plusieurs heures de production, et le village passera donc plusieurs heures ce soir et demain matin sans courant. Par ma faute.
	Les nouvelles vont vite dans un petit endroit comme celui-ci. Je regarde les visages des gens qui me fixent: certains, au vu des sourires en coin qu'ils affichent, trouvent la situation plutôt amusante et je ne doute pas qu'ils ne rateront pas une occasion pour se moquer de moi pendant 3 semaines au moins. Ce qui me dérange plus, ce sont les autres regards. Ceux qui sont vraiment en colère, ceux qui me regardent avec mépris pour mon échec. Je peux presque entendre ce qu'ils pensent.
	???: Il est arrivé il y a moins d'un mois et il a presque déjà détruit une éolienne. Pichard n'aurait jamais fait une erreur aussi stupide. Quelle incompétence. 
	Je soupire intérieurement et me dirige vers ma place habituelle, près du comptoir. Au moins j'ai toujours ça.
}
Arrivé au comptoir, je jette un œil à mes voisins. Benoît, le boulanger, est évidemment là mais je suis surpris de voir qu'il manque quelqu'un d'autre.  
George: Tiens, François n'est pas là ?
Benoît: Non, il a dit qu'il avait d'autres choses à faire et qu'il ne viendrait pas ce soir.
George: D'autres choses à faire ? À Vitry-la-Vallée ??
Voyant que je le regarde comme s'il venait de se frapper la tête contre le compteur à plusieurs reprises, il hausse les épaules. 
Benoît: Il s'est mis en tête je ne sais trop comment qu'il allait faire fortune en devenant mineur. Franchement, entre sa nouvelle obsession et tes éoliennes, j'ai bien cru que j'allais boire tout seul ce soir.
*	[Je suis désolé...]
	Benoît : Oh, t'excuse pas comme ça. Ça arrive à tout le monde de faire des erreurs quand il débute quelque part. L'important c'est qu'il n'y ait pas de dégâts permanents sur les éoliennes. De nos jours, le village ne survivrait sans doute pas plus de quelques mois sans elles.
	George : Ouais...
	Je me sens encore assez coupable de ce qu'il s'est passé tout à l'heure, mais Benoît, la personne probablement la plus impactée par la panne, essaye de me réconforter ?
	Soit c'est vraiment un mec cool, soit je suis particulièrement pathétique.
	-> CHAPTER_1_PARAGARPHE
*	[Je le fixe du regard, clairement ennuyé]
	Il lève les mains en signe d'apaisement. “Hé hé, me regarde pas comme ça, je plaisantais juste; Ça arrive à tout le monde de faire des erreurs.”
	Je baisse les yeux après un moment et soupire.
	J'ai déjà assez de personnes dans le village qui ne m'aiment pas comme ça, pas besoin d'en rajouter un.
	Essayons de changer de sujet.
    -> CHAPTER_1_PARAGARPHE

=== CHAPTER_1_PARAGARPHE ===
George: Devenir mineur ? Je croyais que toutes les mines de la vallée avaient été complètement exploitées et abandonnées il y a au moins 40 ans ?
Benoît: C'est le cas, mais il est persuadé qu'en cherchant assez il va trouver quelque chose que les anciens mineurs ont raté. Je lui ai dit plusieurs fois qu'il perdait son temps, mais il ne veut rien entendre, c'est fou !
*	[Qui sait, peut-être qu'il va vraiment trouver quelque chose.]
	Benoît: Oh non, pas toi aussi ! Les mines sont vides ! Ça fait des décennies qu'elles le sont. Tout ce qu'il va trouver c'est des cailloux, des cailloux et encore des cailloux !
	George: Je sais, je sais, du calme. Tout ce que je dis, c'est que s'il y a vraiment encore quelque chose à miner dans ces montagnes, c'est bien François qui le trouvera. Je connais personne d'aussi déterminé que lui.
	Benoît: Ça c'est bien vrai.
	-> CHAPTER_1_END
* [On verra bien combien de temps il tiendra.]
	Benoît: ”Pfff, je parie qu'il tiendra même pas 2 semaines avant d'abandonner et de retourner s'occuper des moutons de son père.”
	George: “Je parie 1 mois. Tu sous-estimes à quel point c'est une tête de mule.”
	-> CHAPTER_1_END
* [Quelle perte de temps.]
	Benoît : ”On est d'accord.”
	George: ”Son père doit être furieux, non ?”
	Benoît: ”T'as pas idée. J'aimerais pas être là le moment où il retournera chez lui, la queue entre les jambes. Les murs vont trembler.”
    -> CHAPTER_1_END
    
=== CHAPTER_1_END
Après ça on a continué à parler de tout et de rien pendant une bonne heure avant que je rentre chez moi. Sur la route, je ne pouvais pas m'empêcher de repenser à François. Et s'il y arrivait ? S'il trouvait un nouveau filon d'or, ou quelque chose dans le genre dans une des mines ? Ça créerait sans doute beaucoup d'agitation dans le village.
....
Ouais, pas sûr qu'on en ait vraiment besoin en fait.
-> TIMESKIP_1

=== TIMESKIP_1 ===
// 2 mois plus tard plus tard 
Quelques jours plus tard, François trouva un filon gigantesque dans les mines. Mais pas un filon d'or, ou de charbon. Quelque chose d'inconnu. Un nouveau minerai. Il vendit ses échantillons à plusieurs laboratoires au prix fort et, avant qu'on ait eu le temps de se retourner, l'attention du monde entier se porta soudainement sur notre petit village.
Apparemment ce nouveau minerai, baptisé Copium 226, possédait des propriétés jamais vu auparavant qui pourrait permettre de faire progresser la recherche scientifique de plusieurs décennies dans plusieurs domaines en un claquement de doigts, si correctement exploité.
Plusieurs entreprises se sont maintenant installées dans la région dans l'espoir d'exploiter le copium 226, et les travailleurs ont suivi. Ce qui était avant un petit hameau de quelques dizaines d'habitants s'est transformé en l'espace de quelques mois en un bourg de plusieurs centaines. Tout cela a bien évidemment plongé notre petite communauté dans le chaos, et le fait que les 2 pays qui nous entourent, le Fanighastan et le Lorient, revendiquent la région n'aide certainement pas à calmer les choses. Personnellement, j'étais toujours persuadé que la question ne se posait pas et que nous étions des Lorientais, mais il semblerait que le Fanighastan ait vraiment des arguments et des preuves pour appuyer leur demandes. 
Pas que j'ai eu le temps de vraiment suivre cette situation de près : je suis bien trop occupé avec le travail en ce moment.
-> MINIGAME_1

=== MINIGAME_1 ===
Le réseau électrique de Vitry-la-Vallée a été conçu pour alimenter au maximum une centaine d'habitations, et c'est en supposant que chacun ait une consommation responsable -ce qui est un acquis pour les anciens habitants, mais beaucoup moins pour les nouveaux arrivants.
Par conséquent, je suis obligé de garder les éoliennes en fonctionnement presque 24 heures sur 24, 7 jours sur 7. Je ne me souviens pas quand j'ai eu une bonne nuit de repos pour la dernière fois.
{ isTutorialWon:
	<> Par miracle, j'ai réussi à faire tenir le réseau jusqu'ici : depuis que je suis en poste, le réseau électrique n'est pas tombé en panne une seule fois, même si on est pas passé loin à plusieurs reprises !
	George: Je devrais recevoir une foutue médaille et un jour férié à mon nom, mais nooooon, tout le monde s'en fiche du mec qui fait tourner tout le bourg à lui tout seul !
	Je soupire et continue sur ma route, en espérant que personne ne soit dans le coin et ai entendu mon explosion. Le stress et le manque de sommeil commencent à m'atteindre.
	De plus en plus de personnes arrivent chaque jour dans la vallée. Il y a forcément un moment où ça va craquer. J'espère juste trouver une solution avant que ça arrive. 
- else:
	<> Forcément, avec le réseau autant sous pression, j'ai dû tout couper à de multiples reprises pour éviter d'endommager quelque chose de façon permanente. Ça a bien gueulé ce jour-là. Mais ces idiots n'ont aucune idée de tout ce que je dois faire pour que le réseau tienne plus de quelques heures. 
	George: Sérieusement, venez prendre ma place si vous pensez que c'est aussi facile que ça ! Je rigolerai bien quand une des éoliennes explosera par votre faute !
	...
	Bon, les probabilités qu'une explose vraiment sont assez faibles, mais on peut toujours rêver.
	Dans tous les cas, de plus en plus de personnes arrivent chaque jour dans la vallée. En ce moment le réseau tombe en panne tous les 2, 3 jours, mais d'ici peu vous aurez plus de chance de gagner au loto que de voir le réseau électrique de Vitry-la-Vallée fonctionner plus de 12 heures sans problèmes.
	J'aurais bien besoin d'un sauveur avant d'en arriver là.
}
-> CHAPTER_2

=== CHAPTER_2 ===
Je sors de la station, heureux d'avoir enfin fini cette journée d'enfer. Il doit être aux alentours de minuit, ou une heure du mat.
{
	- !isTutorialWon && !isMiniGame1Won:
		<> Aujourd'hui encore, il y a eu une panne. Ça ne me fait même plus d'effet : la première fois que le réseau est tombé en panne, j'ai passé une semaine avant de me débarrasser de mon sentiment de culpabilité. Mais maintenant, ça m'affecte autant que de mettre du beurre sur mes tartines le matin.
	- !isTutorialWon && isMiniGame1Won:
		<> Il n'y a pas eu de panne aujourd'hui. Qui sait, peut-être que ma chance commence enfin à tourner.
	- isTutorialWon && !isMiniGame1Won:
		<> Ce que je redoutais est arrivé: le réseau est tombé en panne pendant plusieurs heures aujourd'hui. Honnêtement, je m'y étais déjà préparé. Ça allait forcément finir par arriver. J'ai essayé de réfléchir à une solution viable toute la journée, mais je n'ai rien trouvé que je pouvais faire seul. Tout ce que je peux faire, c'est continuer de faire de mon mieux en espérant que la réponse se présente devant moi.
	- isTutorialWon && isMiniGame1Won:
		<> Aujourd'hui encore, le réseau a tenu bon sans dysfonctionnement.
		George: Vraiment, si quelqu'un m'entend, je mérite une médaille.
}
La lune est haute dans le ciel, la seule source de lumière dans la vallée. Enfin presque : je peux encore voir de la lumière s'échapper du café de Gérard.
George: Ça fait quoi, 3 semaines que j'y suis pas allé ?
Je ne devrais vraiment pas y aller. Je devrais rentrer chez moi direct et gratter quelques heures de sommeil tant que je le peux. Mais j'ai vraiment besoin d'un verre.
// George arrive au café
Malgré l'heure avancée, le café est encore bondé. Ça fait plaisir de voir qu'au moins une personne profite de l'arrivée de tous ces citadins.
Ma place au comptoir est évidemment prise. Je me mets à faire le tour de la pièce du regard pour essayer de trouver une place de libre.
Avant que j'ai le temps de finir mon tour, un mec me bouscule.
???: Héééééé, connard ! Fais gaffe ou tu mets les pieds !
Il pue l'alcool. C'est clair qu'il est complètement bourré.
{
	- !isTutorialWon && !isMiniGame1Won:
		<> ???: Attends.... Je te r'connais toi... Ouais... t'es le mec qui s'occupe du réseau hein ? C'est à cause de toi toutes ces pannes !
		Les gens autour de nous commencent à se retourner en entendant ça.
		???: Quoi, t'es muet en plus d'être in... incop... nul à ton taff ? Ou t'es sourd ? Réponds !
		Je regarde les autres clients du café. Je vois quelques personnes qui semblent vouloir me soutenir, mais la grande majorité semble se ranger derrière l'alcoolo. Personne n'a l'air d'avoir envie d'arrêter l'altercation. 
		Donc je suis vraiment si pathétique que ça...
		Le pire, c'est que je ne peux même pas vraiment leur en vouloir. Depuis que je suis en poste ici, j'enchaine échecs sur échecs. Personne ici n'aurait fait un meilleur travail que moi, mais ça ne veut pas dire que ce que j'ai fait est bien pour autant.
		Je me retourne vers la porte.
		???: Héééé, tu vas où comme ça ? J'ai pas fi-
		Mon poing vient s'écraser contre son visage, et j'entends quelque chose craquer au niveau de son nez. Il tombe au sol d'un coup, inconscient.
		Le café est complètement silencieux alors que je disparais dans la nuit.
		Le lendemain matin, le bourg est plongé dans le noir. Les habitants supposent une panne, comme d'habitude, plusieurs commencent à se rendre compte que quelque chose ne va pas quand le soir arrive et qu'ils n'ont toujours pas d'électricité.
		Un groupe se forme pour aller directement à la maison de George, où il découvre que sa voiture a disparu. Le groupe finit par forcer la porte d'entrée et trouve une maison complètement vide. Sur la table du salon, il trouve une note avec un trousseau de clé à côté.
		George: Voici les clés de la station de contrôle du réseau électrique de Vitry-la-Vallée. Tous les outils dont vous pourriez avoir besoin pour l'entretien du matériel se trouvent là-bas. Bonne chance.
		// bad end 1, pathétique
		-> END
	- (!isTutorialWon && isMiniGame1Won) || (isTutorialWon && !isMiniGame1Won):
		<> ???: Attends.... Je te r'connais toi... Ouais... t'es le mec qui s'occupe du réseau hein ? C'est à cause de toi la panne aujourd'hui !
		Les gens autour de nous commencent à se retourner en entendant ça.
		???: Quoi, t'es muet en plus d'être in...incop...incomp... nul à ton taff ? Ou t'es sourd ? Réponds !
		Avant que je n'ai le temps de répondre aux accusations de ce type, une voix vient briser la tension du café. 
		Gérard: Conso gratuite pour demain à celui qui vire ce mec de mon café.
		Après quelques secondes d'hésitations, plusieurs personnes se lèvent et emmènent le mec dehors.
		???: ”Hé, hé ! Lâchez-moi ! J'ai pas fini avec ce type ! Je vais m'le faire !!
		...
		Je me dirige vers le comptoir.
		George: ... Merci.
		Gérard: N'oublie pas qu'il y a des gens dans ce village qui savent tout ce que tu fais pour nous. Ceux qui ne sont pas capables de s'en rendre compte ne méritent pas ton temps. Y'a une table dans le coin là-bas. Va t'asseoir et je te ramène à boire dès que possible.
		Je hoche la tête et me dirige vers la table.
	- isTutorialWon && isMiniGame1Won:
		<> Quelqu'un assis à une table proche se lève et tire le type qui me bloque le passage vers le côté.
		???: Je suis vraiment désolé, il a un peu trop bu ce soir. Je vais le ramener chez lui.
		George: ... C'est pas grave.
		Les deux quittèrent le bar, libérant ainsi une table. Je hoche les épaules et m'assoit. Merci ma bonne étoile.
}
A peine ai-je eu le temps de m'asseoir qu'un homme vient s'asseoir à ma table. Pourquoi est-ce-qu'il porte des lunettes de soleil ?
???: Bonsoir. Monsieur George Beauvois, c'est bien ça ?
George: ”Heu... oui, c'est bien moi. Et vous êtes ?"
L'homme tend la main, que je serre par réflexe.
M. Vermeil: “Craig Vermeil. Directeur de la branche de Green Horizon installé à Vitry-la-Vallée.”
Green Horizon...
Quand la découverte du Copium 226 a été annoncée au monde, des dizaines d'entreprises se sont ruées sur l'occasion et se sont implantées dans la région. Mais ce sont toutes des fourmis face au mastodonte qu'est Green Horizon. Basée au Fanighastan, cette entreprise est spécialisée dans la recherche de moyen alternatifs et verts de production d'énergie. D'après certaines rumeurs, ils comptent construire des centrales nucléaires plus performantes et moins dangereuses en remplaçant l'uranium par le Copium 226. 
Je ne sais pas si c'est possible ou pas. Mais vu les ressources qu'ils ont investi ici, ils ont l'air de penser que ça l'est.
George: Enchanté. Que puis-je faire pour vous, M. Vermeil ?
M. Vermeil: Je ne vais pas passer par quatre chemins. Nous souhaitons nous associer avec vous pour renforcer l'emprise de Green Horizon dans la région.
George: Attendez, attendez. Avec moi ?
M. Vermeil: Bien sûr. Vous êtes le garant du réseau électrique de la vallée. Vous pouvez difficilement assurer son bon fonctionnement avec 3 malheureuses éoliennes, et de même nous pouvons difficilement étendre nos opérations quand nous risquons la coupure de courant à chaque instant. 
{
	- isTutorialWon && !isMiniGame1Won:
		<> C'est déjà très impressionnant que vous avez réussi à faire tenir le réseau sans coupure jusqu'ici, mais combien de temps pouvez vous continuer comme ça ? De nouveaux habitants arrivent chaque jour mais, sauf erreur de ma part, il n'y a toujours que 3 éoliennes dans la vallée et 24 heures dans une journée.
	- else:
		<> Vous avez déjà eu des problèmes avec le réseau, et nous savons tous les deux que ça ne va faire qu'empirer si nous ne faisons rien. Ce n'est pas de votre faute : on vous a donné une main perdante. Mais nous sommes là pour changer cela, et faire en sorte que tout le monde gagne.
}
M. Vermeil: Vous avez besoin de notre aide.
George: ...
Je reste silencieux pendant un instant. Il a raison. Le réseau a désespérément besoin d'être amélioré, mais je n'ai absolument pas les ressources, le temps ou la main d'œuvre pour le faire.
George: Que proposez-vous ?
M. Vermeil: C'est très simple. Green Horizon se charge de la mise à niveau du réseau, et en échange vous travaillez pour nous. Vos responsabilités ne changeront pas, mais vous agirez maintenant en notre nom.
George: ”... Je vois. Votre offre semble intéressante, mais je ne suis pas sûr d'avoir l'autorité nécessaire pour prendre ce genre de décision...
???: C'est là que vous avez tort, M. Beauvois. Vous êtes même la seule personne habilitée à prendre ce genre de décision.
Une femme s'assoit subitement à notre table, à coté de M. Vermeil. Si l'intrusion de cette nouvelle personne le dérange, il ne le montre pas : il reste impassible derrière ses lunettes de soleil.
M. Vermeil : Ceci est une conversation privée. Je vous saurais gré de nous laisser seuls.
???: Si vous vouliez avoir une conversation privée, M. "lunettes de soleil en intérieur", vous auriez mieux fait de la tenir dans un lieu privé. Malheureusement pour vous je suis là aussi, et j'aimerais aussi m'entretenir avec notre ami commun.
Elle se tourne vers moi.
Amber: Je m'appelle Amber Wusk, et vous me connaissez sans doute comme la directrice générale de Cosmic Drive. Mais je vous en prie, appelez moi simplement Amber. Et je vous appellerai George !
Je dois probablement être en train de rêver. Je me suis endormi à mon poste dans la station. C'est beaucoup plus probable que ce qui est en train de se passer.
Cosmic Drive est l'autre mastodonte dans la course au Copium 226, spécialisé dans la construction de fusées et de robots pour la conquête spatiale.
C'est la seule entreprise qui peut concurrencer Green Horizon. Si sa directrice générale est vraiment présente en face de moi, dans un café de village perdu dans les montagnes, soit je fais un rêve particulièrement imaginatif, soit j'ai beaucoup plus d'importance dans cette vallée que je ne pensais. 
George: D'accord, Madame... Amber. Que vouliez-vous dire tout à l'heure ? Par rapport à mon habilité à...
Amber: C'est très simple. Le réseau électrique de Vitry-la-Vallée est votre propriété privée. Vous êtes libre de faire ce que vous voulez avec.
George: ... Hein ?
Non. Non, c'est juste... pas possible ? Je ne peux pas posséder le réseau électrique de tout un village ?
Amber: Vous n'êtes pas sans savoir que le réseau a été mis en place par un particulier. Une fois la construction achevée, il a transféré la totalité des droits à la première personne qui est devenu son garant, qui l'a ensuite transmis à son successeur, qui l'a transmis à son propre successeur... et ainsi de suite jusqu'à vous !
Je ne sais pas quoi répondre à ça. Heureusement, Gérard arrive à ce moment-là avec ma boisson, ce qui me laisse quelques instants pour mettre de l'ordre dans mes idées.
George: Très bien... Amber. Je suppose que vous êtes ici pour me faire la même offre que M. Vermeil ici présent.
Amber: Exactement ! De notre côté, on s'assure que le réseau électrique soit toujours à la pointe. Et en échange, vous venez travailler pour nous.
George: Je vois. Et je suppose que l'entreprise que je choisis gagnera un avantage non négligeable sur l'autre dans la course au Copium 226.
M. Vermeil: Vous comprenez vite M. Beauvois. J'espère que vous ferez le bon choix.
Je prends une grande inspiration. Je n'ai pas le choix de toute façon. Même si ça ne me plait pas particulièrement, je suis obligé d'améliorer le réseau avant que tout s'écroule, et ces deux entreprises sont les seules dans la vallée avec les ressources pour faire le travail. 
Mon choix va sans doute décider du sort de la vallée pour les décennies qui viennent. J'ai intérêt d'être sûr de mon choix.
-> CHOICES

=== CHOICES ===
* [J'aimerais poser quelques qestions à M. Vermeil]
    -> CHOICE_GH
* [J'aimerais poser quelques questions à Amber.]
    -> CHOICE_CD
* [J'ai pris ma décision.]
    Les deux représentants se rapprochent du bord de leur siège. La tension autour de la table est palpable. Trop tard pour se désister.
    George: Je choisis de travailler avec...
    -> SELECT_TEAM
    
=== SELECT_TEAM ===
* [Green Horizon]
    George: Green Horizon.
    Et jusque comme ça, toute la pression qui nous entourait disparut. M. Vermeil me serre la main en souriant, et j'ai soudainement l'impression d'être devant un loup qui vient d'attraper sa proie. A côté, j'entends Amber soupirer.
	Amber : Je vois. C'est bien regrettable, mais ce qui est fait est fait.
	M. Vermeil: Je me retire pour la nuit. Je vous conseille de faire de même M. Beauvois. Nous aurons beaucoup de choses à discuter demain. En privé.
    M. Vermeil s'en va, me laissant seul avec une Amber à l'air dépitée. Je me lève rapidement de la table, paye ma consommation et quitte le café.
	Green Horizon... Ça m'avait l'air d'être le meilleur choix ce soir. J'espère ne pas le regretter plus tard.
	-> TIMESKIP_2_GH
* [Cosmic Drive]
    George: Green Horizon.
	Amber: YESSSSS ! Allez tu peux rentrer chez toi le vampire, on n'a plus besoin de toi ici.
	L'explosion d'Amber a au moins le mérite de détendre immédiatement l'atmosphère autour de la table. Même si j'ai du mal à me dire que cette personne est plus vieille que moi.
	M. Vermeil: Voilà qui est extrêmement décevant. Je ne peux que vous demander d'y réfléchir à nouveau cette nuit. Si vous vous réveillez demain et trouvez que vous avez changé d'avis, appelez moi.
	M. Vermeil se lève avec dignité et laisse sa carte de visite sur la table avant de partir.
	Amber: Bougez pas George ! Je vais commander une bouteille, on va trinquer un coup avant que vous ne rentriez !
	Pendant qu'Amber se lève pour aller chercher sa bouteille, je prends la carte de visite de M. Vermeil.
	...
	Non, j'ai déjà pris ma décision. Ça ne sert à rien d'avoir des doutes maintenant. Je déchire la carte avant d'être tenté.
	Cosmic Drive... Ça m'avait l'air d'être le meilleur choix ce soir. J'espère ne pas le regretter plus tard.
	-> TIMESKIP_2_CD


=== CHOICE_GH ===
M. Vermeil: Je vous écoute.
* [Comment comptez-vous utiliser le Copium 226 que vous exploitez ?]
	M. Vermeil : La mission de Green Horizon a toujours été et sera toujours de trouver de nouvelles méthodes de production d'énergie non polluantes et efficaces afin de sortir une bonne fois pour toute des énergies fossiles et sauver notre planète.
		George : Mais le Copium 226 est un minerai, n'est-ce pas ? Donc il n'est pas renouvelable ?
	M. Vermeil: Évidemment. Mais il possède des propriétés très intéressantes. Si nos premières hypothèses sont correctes, nous pourrions remplacer le pétrole et l'uranium dans toutes nos méthodes de production par le Copium 226, et obtenir un rendement 6 à 8 fois supérieur tout en réduisant nos émissions de carbone de 98%.
	M. Vermeil: Nous sommes bien conscients que ce n'est pas une solution permanente, mais l'exploitation du Copium 226, si elle est bien dirigée, pourrait assurer nos besoins en énergies pendant des siècles, ce qui nous laisserait largement le temps de perfectionner des méthodes alternatives comme l'énergie solaire ou hydraulique.
	-> CHOICE_GH
* [Comment comptez-vous améliorer le réseau électrique du village ?]
	Mr Vermeil : ”Nous devons encore mener quelques enquêtes sur le terrain, mais notre plan A serait la construction d'un barrage hydraulique sur la rivière proche. L'énergie produite devrait être suffisante pour alimenter la ville durant sa croissance, pendant que nous construirons en parallèle une centrale nucléaire.”
	George : ”Une centrale nucléaire!? N'est pas un peu... excessif?”
	Mr Vermeil : ”Il semblerait que vous sous-estimez encore la valeur du copium 226, Mr. Beauvois. C'est ma conviction la plus forte que Vitry-la-Vallée va devenir l'une des métropole les plus importantes du monde dans les décennies qui arrivent. Une centrale nucléaire est le strict minimum.” 
	-> CHOICE_GH
* [Que pensez-vous des tensions entre le Fanighastan et le Lorient ?]
	George: Après tout, votre entreprise est basée au Fanighastan. Que ferez-vous si on découvre que les revendications du Fanighastan ne sont pas légitimes ?
	M. Vermeil: M. Beauvois, je peux vous assurer que même si cela arrivait, nous ne ressortirions pas perdants de cette affaire.
	George: ... Vous n'avez pas vraiment répondu à ma question.
	M. Vermeil: Nous sommes des hommes d'affaires, M. Beauvois. Nous ne faisons pas dans la politique.
	-> CHOICE_GH
* [Pourquoi portez-vous des lunettes de soleil ? On est au beau milieu de la nuit.]
	M. Vermeil : J'ai un problème au niveau des yeux.
	J'attends quelques instants, avant de me rendre compte qu'il ne souhaite pas en dire plus.
	M. Vermeil hoche la tête et continue de me fixer d'un regard que je devine intense sous ses lunettes.
	-> CHOICE_GH
* [J'en ai fini de mes questions.]
	-> CHOICES
		
=== CHOICE_CD ===
Amber: Je répondrai à tout ce que vous voulez savoir !
* [Comment comptez-vous utiliser le Copium 226 que vous exploitez ?]
Amber: Vous le savez sans doute déjà, mais le but de Cosmic Drive est la conquête spatiale. Nous comptons incorporer le Copium 226 dans la quasi-totalité de nos équipements, ainsi que dans le carburant de nos fusées. Nos premiers tests sont extrêmement positifs. Si ce minerai fonctionne ne serait-ce qu'à 50% de nos prévisions, nous pourrions effectuer un vol vers Rams en un peu moins d'une semaine. Coloniser la planète serait un jeu d'enfant à partir de ce moment-là.
Je ne peux pas m'empêcher de frissonner un peu à l'idée. Avec la technologie actuelle, un vol vers Rams prendrait un peu moins de 2 ans. Dans des conditions idéales.   
-> CHOICE_CD
* [Comment comptez-vous améliorer le réseau électrique du village ?]
	Amber: On va pas se casser la tête, on va installer une centrale à charbon, vite fait bien fait.
	Je vois apparaître pour la première fois une émotion sur le visage de M. Vermeil : du dégoût.
	Je suis moi aussi obligé de lever un sourcil à l'idée d'installer une centrale à charbon dans cette belle vallée.
	Amber: Hé, ne me regardez pas comme ça. Notre planète est déjà foutue. C'est trop tard pour revenir en arrière maintenant. Notre seule solution, c'est de faire avancer aussi vite que possible nos capacités en matière d'exploration spatiale, afin d'aller coloniser une autre planète.
	M. Vermeil: Détruire une autre planète, vous voulez dire.
	Amber: Non, la coloniser, dans le respect de la faune et de la flore locales. Si une petite centrale à charbon sur Terre est le prix à payer, je le ferais sans sourciller.
	George: Je... vois.
	Au moins on ne peut pas lui reprocher de ne pas avoir de la suite dans ses idées.
	Amber: Bien sûr, ce sera vite insuffisant pour alimenter toute la ville. C'est pour ça qu'une fois la centrale à charbon finie, nous entamerons la construction d'une centrale nucléaire.
	George: ...
    Je n'ai même plus la force d'argumenter contre ça.
	-> CHOICE_CD
* [Que pensez-vous des tensions entre le Fanighastan et le Lorient ?]
	George: Après tout, votre entreprise est basée au Lorient. Que ferez-vous si on découvre que les revendications du Fanighastan sont plus légitimes qu'on ne le pensait ?
	Amber: Honnêtement, ce n'est pas vraiment notre problème. Presque tous les experts s'accordent à dire que le Lorient est plus légitime que le Fanighastan. Et même s'ils venaient à prendre la région, nous ferions tout ce qui est en notre pouvoir pour rester ici. Cette découverte est trop belle pour laisser l'occasion passer.
	-> CHOICE_CD
* [Donc votre nom est Wusk...]
    Amber me regarde d'un air confus.
	Amber: Oui, c'est bien ça.
	George: Avez-vous un lien de parenté avec...
	Amber: Ah. Oui, mon père est Elan Wusk.
	George: ... Votre père.
	Amber: ... J'ai changé de prénom à mes 18 ans.
	George: Oui, c'est compréhensible.
	-> CHOICE_CD
* [J'en ai fini de mes questions.]
	Amber: D'accord ! Si d'autres vous viennent en tête, n'hésitez pas.
	-> CHOICES

 
=== TIMESKIP_2_GH ===
// timeskip 2
Cela fait maintenant 2 ans que je travaille pour Green Horizon. Deux années durant lesquelles le village a continué de se développer à la vitesse d'une comète. D'ailleurs utiliser le terme de village ne fait plus justice à Vitry-la-Vallée : c'est maintenant devenu une grande métropole d'une dizaine de milliers d'habitants. Des routes supplémentaires ont été construites pour que la ville soit accessible en permanence et un supermarché a ouvert récemment dans le centre-ville. Il y a même un kebab !
Un kebab à Vitry-la-Vallée !
... Ahem.
Travailler avec M. Vermeil est à la fois stimulant et effrayant. Il a des attentes très élevées sur comment le travail doit être fait et il n'hésite pas à le faire savoir au reste de l'équipe.
Ceux qui arrivent à suivre le rythme sont récompensés avec des promotions et des avantages non négligeables, et M. Vermeil se débarrasse de ceux qui n'y arrivent pas. Je l'ai déjà vu virer un stagiaire en pleine réunion parce qu'il lui avait ramené un café froid. Ce qui viole probablement plusieurs lignes du code du travail, mais personne dans la salle n'a osé le faire remarquer. Personne n'a envie de "parler en privé" avec le patron. 
-> MINIGAME_2_GH

=== MINIGAME_2_GH ===
// sur la route vers la station
La construction du tant attendu barrage hydroélectrique s'est terminée il y a quelques mois. Avant cela, la demande d'énergie que le réseau ne pouvait pas gérer était prise en charge par des groupes électrogènes généreusement offerts par Green Horizon au habitants dans le besoin. Mais depuis, tout est retombé sur moi.
Point positif : le barrage est capable de produire jusqu'à 100 000 000 KWh/an, suffisant pour fournir de l'électricité à presque 45 000 personnes : le réseau électrique ne devrait pas subir de problème de surcharge avant un long moment. Le point négatif, c'est que tout problème qu'il pourrait avoir sur le réseau maintenant sera directement lié à mon incompétence. Et M. Vermeil n'aime pas l'incompétence. 
Et on pourrait penser que mes journées sont plus tranquilles maintenant que ma console de travail ne risque plus de prendre feu à tout moment, mais même pas ! Je passe presque tout mon temps à surveiller le barrage, à l'entretenir et à réparer le moindre petit défaut. 
Oui je sais que c'est extrêmement important et qu'un accident au niveau du barrage serait catastrophique, mais ça va pas m'empêcher de me plaindre. 
-> CHAPTER_3_GH

=== CHAPTER_3_GH ===
Ma journée de travail finie, je me dirige vers le bureau de M. Vermeil. Tous les lundis, nous avons un rendez-vous où nous discutons de mes performances, de l'état et des besoins du réseau, ainsi que des choses à prioriser pour l'entreprise.
Le pire moment de ma semaine.
Je toque à la porte.
M. Vermeil: Entrez.
J'entre dans le bureau. Assis dans son fauteuil, M. Vermeil lève la tête du document qu'il était en train de lire. Deux ans après, je suis toujours aussi intimidé par son regard intense caché derrière ses lunettes noires.
{
	- !isMiniGame1Won:
		M. Vermeil: Je n'ai pas envie de faire ça Mr. Beauvois, mais je n'ai pas le choix.
		Aïe. Ça commence mal.
		M. Vermeil: Pour éviter que nous subissions plus longtemps qu'il ne faut ce moment difficile, je vais être direct : vous êtes viré.
		Il me faut quelques instants pour traiter ce qu'il vient de me dire.
		George: Excusez-moi ? Je crois avoir mal compris...
		M. Vermeil: Non, vous n'avez pas mal compris M. Beauvois. Cela fait plusieurs semaines que vous ne remplissez pas vos quotas. J'avais placé beaucoup d'espoirs en vous, vous savez ? Je pensais qu'il vous fallait juste un peu plus de temps pour vous habituer à vos nouvelles fonctions avec le barrage, mais force est de constater que votre travail n'est juste pas satisfaisant, et généralement pas au niveau pour travailler ici.
		George: Mais je...
		M. Vermeil: Gardez votre salive. La décision a déjà été prise. Libérez votre poste d'ici demain soir. Votre remplaçant doit arriver dans 2 jours.”
		J'ai déjà vu cette situation une dizaine de fois ces dernières années. Je sais que ça ne sert à rien de se débattre, que M. Vermeil ne revient pas sur sa décision une fois qu'il l'a prise. Pourtant mon cerveau essaye quand même désespérément de trouver une solution, un moyen de pression.
		* [Vous oubliez que le réseau m'appartient. Si vous me virez, je...]
			George: V-Vous oubliez que le réseau m'appartient. Si vous me virez, je...
			Il ne me regarde même plus. Il a déjà replongé la tête dans son document, comme si je n'existais plus pour lui.
            M. Vermeil: Le réseau électrique de Vitry-la-Vallée est devenu la propriété de Green Horizon quand vous avez signé votre contrat de travail. Vous l'avez lu n'est-ce pas ?”
            -> BAD_END_2
		* [...]
		    -> BAD_END_2
}


M. Vermeil: Ah, M. Beauvois. Asseyez-vous. Nous n'avons pas énormément de choses à nous dire cette semaine, donc je pense que ça devrait aller assez vite.
Je m'assois sur un des fauteuils posés devant le bureau de Mr Vermeil. Comme il l'a dit, nous sommes plutôt dans une période plate pour l'entreprise. Le barrage hydroélectrique fonctionne parfaitement bien et devrait suffire à lui seul à approvisionner tous les habitants de la ville en électricité pendant des années.
La centrale nucléaire est encore au stade embryonnaire pour l'instant, mais l'emplacement a déjà été choisi et les plans déjà dessinés. Il manque juste les autorisations administratives. Il y a juste quelques problèmes au niveau de l'exploitation du Copium 226 : apparemment, les tunnels des anciennes mines sont devenus instables et risquent de s'effondrer, donc le minage est interrompu le temps de les renforcer. Heureusement, ce n'est pas mon problème. Je suis déjà bien assez occupé avec mon propre boulot.
M. Vermeil : Une dernière chose : des investisseurs vont venir visiter les locaux prochainement. Il est probable qu'ils veuillent voir d'eux même le barrage, et peut être aussi votre poste de travail. Je ferai en sorte qu'ils vous dérangent le moins possible, mais ne soyez pas surpris si vous voyez des gens passer pendant vos heures.
George: Très bien, c'est noté.
{
	- ifQuota1Respected:
		Je commence à me lever du fauteuil, mais M. Vermeil lève sa main pour m'interrompre. 
		George: Il y avait autre chose ?
		M. Vermeil: J'ai une proposition à vous faire. Informelle.
		George: Oui ?
		Je me rassois dans le fauteuil. Honnêtement, j'ai l'air calme en extérieur mais je suis absolument en train de paniquer intérieurement : je n'ai aucune idée de ce qu'il veut.
		M. Vermeil: Vous savez que je ne suis pas du genre à mâcher mes mots. Quand quelque chose ne va pas avec quelqu'un, je n'hésite pas à le lui faire savoir. Alors laissez-moi vous dire ceci : vous êtes la personne la plus compétente avec qui j'ai eu le plaisir de travailler de ma carrière.
		J'expire un grand coup. Je ne m'étais même pas rendu compte que je retenais ma respiration jusque là.
		Ce n'est certainement pas dans cette direction que je pensais que cette conversation allait aller, mais je ne vais pas m'en plaindre.
		M. Vermeil: Ces deux dernières années, vous avez surpassé de loin tous les quotas qu'on aurait pu utiliser pour mesurer vos performances.
		George: ... Je suis évidemment très heureux de recevoir autant de compliments, mais j'avoue ne pas voir où vous voulez en venir...
		M. Vermeil: C'est très simple. Je me suis rendu compte que, malgré avoir travaillé étroitement ensemble pendant autant de temps, nous nous connaissons à peine. Et j'aimerais remédier à ça. C'est pour cela que j'aimerais que vous m'accompagniez ce soir pour dîner. En tant que collègues, et non en tant que patron et employé.
		Je reste bouche bée pendant un long moment. M. Vermeil, l'ogre de Green Horizon, qui m'invite à dîner ? En tête à tête, et pas uniquement pour rencontrer un client ? Les autres vont jamais me croire...
		Je me rends compte qu'il attend une réponse. Devrais-je accepter ? Si c'est vraiment juste une invitation de collègue à collègue, je ne vois pas de raisons de refuser, mais si le dîner se passe mal, peu importe ce que dit mon patron, ça va mettre à mal ma carrière.
		* [Je serais heureux de dîner avec vous.]
			On ne réussit pas dans la vie sans prendre quelques risques. Même si le repas se passe mal, ce n'est pas comme si j'allais mourir.
			M. Vermeil: Parfait. Suivez-moi, on va prendre ma voiture. J'ai une réservation dans un restaurant dans le centre-ville. Normalement j'y vais seul, mais je suis sûr que...
			George : Mr Vermeil.
			Il s'arrête et me fixe de son regard intense dont seul lui à le secret. Je suis peut-être déjà en train de faire une grosse connerie, à peine 10 secondes après le départ, mais qui ne tente rien n'a rien.
			M. Vermeil: ... Oui ?
			George : Je me disais, si vous tenez vraiment à ce que ce repas soit un dîner "entre collègues", nous pourrions peut-être se tutoyer ce soir.
			...
			George: T'en penses quoi Craig ?
			Ok, peut-être que j'étais un peu trop optimiste. Il est parfaitement possible que je meurs ce soir. 
			M. Vermeil: ...
			A ma grande surprise, mon patron ne décide pas de m'exterminer ici et maintenant pour punir mon impudence. Non, il fait quelque chose d'encore plus improbable et sourit.
			Craig: Ça me va, George. Mais seulement en dehors du bureau. Tu m'appelles une fois par mon prénom en réunion et je te défenestre.
			George : ”Ah ah, c'est marrant, je savais pas que t'étais capable de faire des blagues comme ça !”
			...
			C'était une blague hein ?
			// timeskip ?
			George: ”C'était une blague, hein ?”
			Après ça, Craig m'a emmené dans son restaurant. Un étoilé !
			Je ne savais même pas qu'il y avait un étoilé en ville.
			Heureusement il a coupé court à ma crise de panique en annonçant qu'il payerait pour moi. 
			Finalement, le repas s'est bien passé. On s'est fait un point d'honneur au début du repas de ne pas parler du travail, et à la place on a discuté de notre enfance, de nos loisirs, de nos rêves...
			Croyez le ou non, mais Craig aime peindre apparemment. Il a promis qu'il me montrerait une de ses toiles un jour.
			Aussi fou que cela puisse paraître, j'ai vraiment passé un bon moment. J'ai presque envie de croire que cela pourrait être le début d'une belle relation...
			~ georgeRelationCraig = true
			-> CHAPTER_4_GH
		* [Je suis désolé, je ne peux pas ce soir...]
			C'est sans doute la décision la plus sage. Un petit mensonge maintenant vaut mieux qu'un faux pas majeur pendant le repas. Le risque est trop grand.
			J'ai l'impression d'entendre un petit soupir s'échapper de M. Vermeil. J'ai même presque envie de dire qu'il semble... déçu ? Comme d'habitude avec lui, c'est dur à dire.
			M. Vermeil : Je vois. C'est bien dommage. Une autre fois peut-être.
			George : Oui, une autre fois ! Définitivement ! Si c'est tout ce que vous vouliez...
			M. Vermeil : Oui, vous pouvez y aller M. Beauvois.
			George: Très bien. Passez une bonne soirée Mr Vermeil.
			Je m'échappe du bureau et quitte les locaux aussi vite que possible. 
			Je reçois quelques autres invitations dans les semaines qui suivent, que j'esquive avec quelques autres mensonges bien placés. Puis plus rien. J'ai sans doute légèrement froissé le patron en faisant ça, mais c'est toujours mieux que de perdre complètement mon travail.
			-> CHAPTER_4_GH
	- else:
		Je me lève du fauteuil, lui serre la main et me dirige vers la porte. Il n'avait pas menti quand il a dit que ça allait aller vite : la réunion a à peine duré une dizaine de minutes.
		Mr. Vermeil : ”Ah et, George ?”
		Une main sur la porte, je me retourne subitement vers lui. J'ai pas revé, Il vient de m'appeler par mon prénom ? Il vient totalement de m'appeler par mon prénom ! C'est la première fois qu'il le fait depuis que je le connais !
		Mr. Vermeil : ”Continue le bon boulot.”
		George : ”Oui monsieur.”
		Je m'enfuie du bureau aussi vite que la politesse le permet.
		Une fois dans le couloir je me pince l'avant bras.
		George : ”Aïe.”
		Non, je ne suis pas en train d'halluciner. Mr. Vermeil vient vraiment de me complimenter et de m'appeler par mon prénom dans la même minute. 
		Ça doit être une nuit de pleine lune. 
		-> CHAPTER_4_GH
}

=== BAD_END_2 ===
		M. Vermeil: Si c'est tout, la porte se trouve derrière vous. Green Horizon vous remercie pour vos services.
		...
		Je ferme la porte derrière moi en sortant du bureau. Je serre les poings de frustration. Frustration d'avoir perdu mon travail. Frustration de ne pas avoir pu mieux argumenter en face de mon patron. Frustration d'avoir gâché une des meilleures opportunités de ma vie.
		J'ai envie de taper dans le mur à côté. Peut-être même de péter une fenêtre. A la place je lâche un long soupir et quitte les locaux de Green Horizon.
		...
		Peut être que je devrais quitter la vallée. 
		J'y étais venu pour profiter de la nature en toute tranquillité, mais ça fait longtemps que ce n'est plus possible. Seul le boulot me retenait ici.
		...
		Oui, il est temps de déménager. 
		-> END // bad end 2, les temps changent

=== CHAPTER_4_GH ===
Cela fait maintenant 8 ans que je travaille chez Green Horizon. En regardant la mégapole de plus d'un million d'habitants s'étendre à travers toute la vallée, personne ne pourrait penser qu'il n'y avait presque rien il n'y a même pas 10 ans. Le petit village de Vitry-la-Vallée est devenu une agglomération capable de rivaliser avec les plus grandes capitales du monde, et je ne peux pas m'empêcher de me sentir un peu fier en me disant que j'ai joué un rôle là dedans. Cette réussite est liée en grande partie à la nouvelle centrale nucléaire, dont la construction s'est achevée l'année dernière. Avec une capacité maximale de production de 5 TWh par an, l'autonomie énergétique de Vitry-la-Vallée est assurée pour les décennies à venir.
La ville n'est pas la seule chose qui s'est étendue ces dernières années. Green Horizon exploite la quasi-totalité du Copium 226, et a même investi dans beaucoup d'autres entreprises dans la vallée. De nos jours, il est rare de trouver un business dans la région qui n'est pas lié de près ou de loin à Green Horizon.
D'ailleurs, ça fait quelques années maintenant que je dirige une équipe ! Fini les journées de 10 heures à courir partout pour régler des problèmes mineurs, maintenant je peux juste tout déléguer et rentrer chez moi regarder questions pour un champion. 
Vive le patronat.
{
	- georgeRelationCraig:
		En parlant de patron, je pense pouvoir officiellement dire que Craig et moi sommes devenus amis très proches ces dernières années. 
		Enfin je crois ? 8 ans après, il est toujours aussi inexpressif. Mais je pense qu'on a franchi un cap dans notre relation quand on a commencé à jouer au golf ensemble. Ou alors quand il m'a emmené en vacances avec lui pour faire du jet-ski. Ou alors quand il m'a offert un cheval (5 ans après et il est toujours dans mon jardin. Aucune idée de ce que je suis censé faire avec).
}
Mais évidemment, les bonnes choses ne durent jamais très longtemps. Il y a quelques semaines, le Lorient a présenté à la communauté internationale des preuves irréfutables qu'elle possède bien la vallée de Vitry, et que les revendications du Fanighastan sont totalement infondées. Depuis, une ambiance assez lourde pèse dans les locaux de l'entreprise. Personne n'ose le dire, mais tout le monde pense la même chose : il est probable que Green Horizon soit forcé de plier bagage et de quitter la vallée dans les semaines ou les mois qui viennent...
{
	- !georgeRelationCraig:
		Les locaux sont calmes aujourd'hui. Les gens travaillent en silence, chacun dans son coin, comme s'ils essayaient de ne pas se faire remarquer. Je peux les comprendre : M. Vermeil est d'humeur massacrante en ce moment. La moindre erreur se fait immédiatement réprimandée, souvent de manière excessive.
		Il est clair qu'il se passe quelque chose avec lui, mais je ne peux pas y faire grand-chose. C'est pas comme si on était particulièrement proches, je ne peux pas juste rentrer dans son bureau et lui demander "Hé Craig, tu sembles un peu colérique en ce moment, cela met une mauvaise ambiance dans les bureaux et j'ai besoin de calme et de ne pas travailler sous pression afin de pouvoir m'épanouir. Pourrais-tu s'il te plait me dire ce que tu as sur le cœur afin que nous puissions trouver une solution?"
		Non non, il me ferait un german suplex avant la fin de mon troisième mot.
		Pas vraiment d'autre choix, il faut juste laisser couler et espérer que ça se règle tout seul.  
		Maintenant, j'en étais où dans ce...
		// Woub woub woub bruit de sirène d'alarme wallah je sais pas quoi mettre ici
		George: Quoi ?!
		C'est le signal d'évacuation d'urgence ! Mais ça ne fait aucun sens ! Le signal n'est censé s'activer qu'en cas d'incident irréversible qui entraînerait l'explosion de la centrale, comme une fusion des cœurs.
		Quelque chose comme ça n'est pas censé arriver d'un claquement de doigts ! On aurait dû avoir des signes, des moyens de le voir venir.
		Je sors de mon bureau et aperçoit M. Vermeil, dans l'openspace principal, en train d'organiser l'évacuation du personnel.
		M. Vermeil : La centrale est perdue, on ne peut rien faire pour arrêter l'explosion maintenant. Il faut évacuer le plus vite possible. Les autorités ont déjà été prévenues.
		Quelque chose me chiffonne dans son attitude. Il a toujours été impassible, mais il me semble bien trop calme. Je veux dire, c'est une catastrophe nucléaire ! Ce n'est pas normal de ne pas paniquer un minimum ! Est-ce qu'il est humain même ?
		Attends, c'est pas le moment de se poser ce genre de questions !
		N'écoutant que mon courage, je décide...
		* [Aller à mon poste de travail pour vérifier moi même l'état de la centrale.]
			Il y a quelque chose qui ne tourne pas rond ici. Ce n'est pas normal que l'alarme sonne comme ça sans prévenir. Heureusement pour moi, M. Vermeil est occupé avec l'évacuation. Je me dirige discrètement vers mon poste de travail.
			Arrivé à ma console, je lance un diagnostic de la centrale.
			George : ... Qu'est ce que c'est  que cette connerie !?
			Je relis chaque ligne 2 fois, 3 fois, mais le résultat est formel : il n'y a aucun problème. Nul part.
			La centrale tourne dans des conditions absolument idéales.
			Je relance l'outil de diagnostic pour être sûr. Mais le résultat ne change pas.
			Mais... S'il n'y a aucun problème, alors pourquoi est-ce-que le signal a été déclenché ?
			Alors que j'essaie de comprendre ce qui est en train de se passer, je vois une autre chose étrange : le pare-feu de la centrale vient d'être désactivé.
			George: Est-ce que quelqu'un essaie de prendre le contrôle de la centrale à distance ?
			Comme pour répondre à ma question, je vois en direct les valeurs de plusieurs des éléments de contrôle de la centrale être modifiés. Les changements sont mineurs : quelques degrés par ici, un peu de pression en plus par là. Ce serait facile de passer à côté, mais si on laissait la centrale comme ça, le cœur finirait pas entrer en fusion et causerait une explosion après une petite journée.
			Juste assez de temps pour organiser l'évacuation de la ville. 
			Je ne peux pas m'empêcher de penser que tout est lié. Et pourtant... M. Vermeil pourrait-il vraiment faire ça ?
			Ce n'est pas impossible. Après tout, ce n'est pas comme si je le connaissais vraiment. On ne s'est jamais vraiment rapprochés, malgré avoir travaillé ensemble pendant si longtemps. 
			Attends, ce n'est pas le moment de penser à ça ! Je suis probablement la seule personne encore dans le bâtiment. Si je ne fais rien la centrale va exploser et raser l'entièreté de la vallée !
			Je commence à redémarrer le pare-feu de la centrale. Heureusement que j'ai un minimum de connaissances en informatique.
			George: Hein !?
			Oh, il semblerait que quelqu'un en face ait remarqué ce que j'étais en train de faire !
			L'attaque a gagné en intensité : à ce rythme là, la région ne va pas être rasée dans quelques heures mais dans quelques minutes ! Je dois faire quelque chose !
			-> MINIGAME_4_GH
		* [Aider M. Vermeil à organiser l'évacuation du personnel.]
			J'ai confiance en M. Vermeil. C'est en grande partie grâce à lui que l'entreprise a pû devenir ce qu'elle est. S'il dit qu'on évacue, alors on évacue. 
			Je me glisse à ses côtés et ensemble nous évacuons l'entièreté du personnel aussi loin de la ville que possible. 
			Ses heures passées coincé dans les bouchons ont été les plus anxiogènes de ma vie.
			Finalement, après le retentissement de l'alarme dans les bureaux de Green Horizon, la centrale explosa, inondant l'entièreté de la vallée de radiations. Les retombées vont rendre la région inhabitable pendant des décennies au grand minimum, coupant court à l'exploitation du Copium 226 par la même occasion. Personne n'est mort de l'explosion en elle-même, mais il est probable que beaucoup aient souffert des complications liées aux radiations subies.
			La branche de Green Horizon à Vitry-la-Vallée ferma évidemment ses portes, licenciant l'intégralité de son personnel. Je perdis contact avec M. Vermeil peu longtemps après ça. Retrouver un travail après ça ne fut pas aisé, mais j'y suis parvenu. C'était clairement moins prestigieux (et surtout moins bien payé) que ce que je faisais à Green Horizon, mais au moins le travail était honnête. 
			Si je garde un regret encore aujourd'hui, dans mes vieux jours, c'est qu'on n'a jamais découvert la vérité derrière cet accident. Je ne peux m'empêcher de penser qu'il y avait plus dans cette histoire, une face cachée que je n'ai pas su voir...
			-> END // bad end 3, que s'est-il passé ?
	- else:
		Je pensais qu'aujourd'hui allait être une journée lambda et plutôt calme, mais pour une raison que j'ignore Craig m'a convoqué dans son bureau ce matin. 
		Je ne sais pas ce qui l'a mis dans cet état, mais ça doit être quelque chose de grave; ça doit faire 2 minutes que je suis là et qu'il ne m'a rien dit. Craig a beau être inexpressif, j'ai appris un minimum à lire ses émotions après avoir passé autant de temps ensemble, et je ne l'ai jamais vu aussi troublé.
		Craig: M. Beauvois. Ce que je suis sur le point de vous dire ne doit jamais sortir de ce bureau. Si cela venait à se savoir, nos vies seraient en très grand danger. Je vous dis cela parce que nous partageons un lien fort et que je vous fais confiance.
		George: Cra... M. Vermeil, qu'est-ce qui se passe ?
		Craig: Green Horizon a reçu l'interdiction d'opérer dans le Lorient. Nous allons être forcés d'ici peu d'arrêter l'exploitation du Copium 226, de vendre toutes nos installations et nos actifs, et de quitter la vallée.
		George: Oh... Je vois...
		Oui, c'est sûr que la perte du Copium 226 est un coup dur pour Green Horizon, mais c'est l'une des plus grandes entreprises du monde ! Elle a sûrement les moyens de compenser cette perte autre part.
		George: Quelque chose me dit que ce n'est pas tout, n'est-ce pas ?
		Craig: Effectivement. Le conseil d'administration de Green Horizon a décidé que, si nous ne pouvons pas exploiter le Copium 226, personne ne le pourra. Soutenu par le gouvernement du Fanighastan, ils ont engagé un hacker dont le but est de faire exploser à distance notre centrale nucléaire.
		George: Pardon !?
		Craig: J'aimerais moi aussi que ce soit une mauvaise blague, mais ce n'est pas le cas. J'ai reçu l'ordre de faire évacuer les locaux et de m'assurer que personne n'interfère pendant l'attaque.
		Choqué par ce que je viens d'entendre, je titube vers un des fauteuils.
		Faire exploser la centrale ? Ils sont complètement fous ! Ils vont raser l'entièreté de la vallée, et pourquoi ? Parce qu'ils n'ont plus accès au Copium 226 ?
		George: ... Qu'est-ce que l'on va faire ?
		Craig: La seule chose à faire. J'ai reçu mes ordres.
		Hein ? Non. J'ai dû mal comprendre.
		George: Craig. Ne me dis pas que tu comptes suivre ce plan de malade.
		Craig : Je n'ai pas le choix. Je ne peux pas me permettre de perdre ma position.
		George : Donc quoi, tu es prêt à détruire la vie de plusieurs centaines de milliers de personnes pour de l'argent ?
		Craig : Oui.
		Face à mon incompréhension, il lâche un long soupir.
		Craig : Ma mère est malade, George. J'arrive à lui donner une vie à peu près correcte avec mon salaire, mais le prix de son traitement est astronomique. Sans ce travail, je ne pourrais jamais me permettre de le lui payer. Alors oui, si cette vallée est le prix à payer pour sa vie, je le paierai sans trembler.
		J'ai envie de lui mettre mon poing dans la gueule, de l'insulter, de le traiter d'égoïste, mais en réalité, je ne peux pas dire avec certitude que je ne ferais pas la même chose dans sa position. Il doit sentir mon hésitation, parce qu'il se lève et s'approche de moi.
		Craig : Je t'en prie George, ferme les yeux pour cette fois. Si tu me laisses faire, je peux t'assurer une vie de roi. Tu pensais qu'on vivait la belle vie ici mais tu n'as encore rien vu. Tout ce que tu veux, tu pourras l'avoir en 5 exemplaires d'un claquement de doigts. Mais je ne peux pas t'aider si tu t'opposes à moi. Alors j'ai juste besoin que tu me fasses confiance une dernière fois.
		* [... D'accord.]
			Craig: ... Vraiment ?
			George: Oui. Tant que tu peux m'assurer que personne ne mourra à cause de nous.
			Craig: Bien sûr. Tout le monde aura largement le temps d'évacuer la ville. Green Horizon aidera même tous ceux qui ont besoin d'aide à se reloger et retrouver une vie normale. Tu as ma parole.
			Je suis bien obligé de lui faire confiance sur ce point. Ce n'est pas comme si j'avais un moyen de vérifier avant que ça arrive. 
			Et si je suis honnête avec moi-même, j'essaie surtout de me faire déculpabiliser.
			Suis-je vraiment arriver à un point où je suis prêt à causer intentionnellement l'explosion d'une centrale nucléaire juste pour garder ma vie de nouveau riche ?
			...
			Apparemment.
			Craig active le signal d'évacuation d'urgence et il n'y a plus de retour en arrière possible à partir de ce moment-là. Nous commençons à évacuer le personnel, et quelques heures plus tard nous nous retrouvons tous en sécurité, loin de la ville.
			Plus qu'à attendre l'inévitable.
			Finalement, quelques après le retentissement de l'alarme dans les bureaux de Green Horizon, la centrale explosa, inondant l'entièreté de la vallée de radiations. Les retombées vont rendre la région inhabitable pendant des décennies au grand minimum, coupant court à l'exploitation du Copium 226 par la même occasion.
			Au moins, Craig a tenu parole. Personne n'est mort dans la vallée, et Green Horizon a aidé ceux qui en avaient le plus besoin à retomber sur leurs pattes.
			Ce qui leur a même permis d'améliorer leur image au niveau de la population.
			Assez ironique pour tous ceux qui savent la vérité.
			De notre côté, cette "tragédie" nous a bien profité : Craig a récupéré une place au conseil d'administration de l'entreprise, et il m'a donné un poste fantôme qui me permet de vivre le reste de ma vie dans l'aisance et la tranquillité.
			Un peu comme ce que je cherchais en revenant à Vitry-la-Vallée, mais avec plus d'argent et de villas à la plage.
			Normalement, c'est le moment dans ce genre d'histoire où je vous dis que malgré tout ce que je possède, ma vie est vide de sens et que je ne suis pas heureux.
			Mais ce n'est pas le cas : je vis ma meilleure vie.
			Peut être que j'aurais pu faire des meilleurs choix. Mais cette fin n'est pas si mal non plus.
			-> END // Greed End. Vendre son âme au diable
		* [Non. Je ne peux pas.]
			Craig: George...
			George: Non Craig. Je ne peux pas te laisser faire ça. Même si elle n'a plus rien à voir avec l'endroit où j'ai grandi, cette vallée reste ma maison. Je ne peux pas baisser les yeux comme ça et vous laisser la détruire.
			Craig: ... Je vois.
			Il se rassoit dans son fauteuil, l'air défait.
			Craig: L'attaque commence dans une heure. Je n'essaierai pas de t'arrêter, mais peu importe ce que tu fais tu le feras seul : je lance l'alarme et commence l'évacuation dans 5 minutes.
			George: ...Quoi, tu vas juste me laisser faire ce que je veux comme ça ?
			Craig: Je peux voir ta détermination dans ton regard. Je ne suis pas du genre à gâcher mon souffle pour une cause perdue, et je ne vais pas non plus t'assommer et t'enfermer dans mon coffre pour te forcer à évacuer. Sauve la centrale, ou meurs en essayant. En mémoire de notre amitié, je ne te gênerais pas.
			George: ...D'accord.
			...
			George: Merci pour tout Craig. Et adieu.
			Je quitte son bureau et me dirige vers mon poste de travail. Quelques instants après, l'alarme retentit.
			Une heure plus tard, comme prévu, l'attaque commence. Je vois en direct le pare-feu de la centrale être désactivé, et plusieurs outils de contrôle commencent à se dérégler par eux même. Il semblerait que le hacker ait pris contrôle de la centrale à distance. 
			Le moment de vérité approche. Je dois défendre la vallée !
			-> MINIGAME_4_GH
}

=== MINIGAME_4_GH ===
{
	- isMiniGame4Won:
		Après un long duel entre George et le hacker de Green Horizon, la centrale fut sauvée.
		{ 
		    - georgeRelationCraig:
				Malheureusement, le hacker avait effacé toutes ses traces et sans preuves tangibles personne n'a réussi à déterminer qui était responsable derrière cette attaque.
			- else:
				George raconta tout ce qu'il s'était passé à l'armée du Lorient, responsable de l'enquête, y compris l'implication de Green Horizon. Malheureusement, le hacker avait effacé toutes ses traces, et sans preuves tangibles personne ne put incriminer l'entreprise ni le gouvernement du Fanighastan.
		}
		Finalement Green Horizon fut obligé de vendre tous ses actifs et installations à Cosmic Drive, qui se jeta sur l'occasion de remettre un pied dans la région et de pouvoir reprendre l'exploitation du Copium 226.
		George, en récompense de sa bravoure, obtint la médaille dont il avait toujours rêvé et fut engagé en tant que directeur de la branche de Cosmic Drive.
		Il ne goûta plus jamais à la vie en communion avec la nature comme il avait prévu en revenant à Vitry-la-Vallée, mais cette vie n'était pas trop mal non plus.
		-> DONE // Good End 1. Green Horizon
	- else:
		Malgré tous ses efforts, George ne parvint pas à empêcher la centrale d'exploser. L'explosion dévasta la région, tuant une grande partie de la population qui n'avait pas encore eu le temps d'évacuer.
		Personne ne sut expliquer ce qu'il s'était passé ce jour fatidique, mais la catastrophe nucléaire de Vitry-la-Vallée fut la pire de l'histoire de l'humanité, relançant de plus belle les débats autour de la sécurité de l'énergie nucléaire et coupant nette l'exploitation du Copium 226.
		-> END // Bad End 4. Faire empirer les choses en voulant aider
}

=== TIMESKIP_2_CD ===
Cela fait maintenant 2 ans que je travaille pour Cosmic Drive. 2 années durant lesquelles le village a continué de se développer à la vitesse d'une comète. D'ailleurs utiliser le terme de village ne fait plus justice à Vitry-la-Vallée : c'est maintenant devenu une grande métropole d'une dizaine de milliers d'habitants. Des routes supplémentaires ont été construites pour que la ville soit accessible en permanence et un supermarché a ouvert récemment dans le centre-ville. Il y a même un kebab !
Un kebab à Vitry-la-Vallée !
.. Ahem.
Amber est une personne très... excentrique, c'est le premier mot qui me vient en tête. Elle a une approche très passive de la gestion de l'entreprise : tant que les employés remplissent leurs objectifs, ils sont libres de faire ce qu'ils veulent de leur journée. J'ai vu certains de mes collègues lancer des parties de LotL (Legends of the League) en plein milieu de la journée et j'en ai juste pas vu d'autres parce qu'ils préfèrent rester chez eux et travailler en distanciel.
Amber ne fait pas exception à cela. Je la vois plus souvent en train de poster des memes sur Tweether qu'en train de bosser. Je ne sais pas comment la boîte n'a pas encore coulé. Peut-être qu'elle n'a juste pas tant de responsabilités que ça...
-> MINIGAME_2_CD

=== MINIGAME_2_CD ===
En sortant de chez moi, je prends une grande bouffée d'air pure et propre de montagne, intouché par l'homme.
...
J'aurais pu dire ça il y a 2 ans. Aujourd'hui, faire ça est un bon moyen de se retrouver avec un cancer des poumons dans 15 ans. Vitry-la-Vallée est entrée cette année dans le top 100 des villes les plus polluées de Lorient, et on peut remercier pour ça la magnifique centrale à charbon (enfin, centrale à thermique à flammes si on veut être précis) construite par Cosmic Drive.
Oui, je sais que je suis en partie responsable de cette situation, mais voyons les choses du bon côté : premièrement, tant qu'on arrive à se fournir en trucs à faire cramer, la centrale produit assez d'énergie pour soutenir une population de plus de 100 000 habitants. Et ça tombe bien, vu qu'il reste apparemment encore pas mal de charbon dans les montagnes de la région. C'est à se demander pourquoi les opérations de minage avaient été arrêtées à la base. 
Deuxièmement, c'est pas mon boulot de gérer la centrale ! Je suis uniquement responsable de la maintenance et des réparations en cas de besoin, ce qui arrive très rarement. Depuis l'ouverture de la centrale, j'ai dû remplacer 2 boulons, tout au plus.
Bref, j'ai peut-être perdu quelques années d'espérance de vie, mais en échange je me la coule douce. C'est plutôt rentable je trouve.
-> CHAPTER_3_CD

=== CHAPTER_3_CD ===
Alors que j'étais en train de finir ma journée, je suis soudainement convoqué par Amber. Intrigué, je me dirige vers son bureau.
George: Vous vouliez me voir Amber?
Amber: Ah George, parfait. Assieds toi, j'ai des nouvelles pour toi.
George: Bonnes ou mauvaises ?
Amber: Je te laisserais décider.
Légèrement inquiet, je m'assois sur l'un des fauteuils en cuir devant le bureau d'Amber. Je n'ai pas eu l'impression de faire du mauvais boulot récemment, donc ça devrait bien se passer, pas vrai ?
{
	- !isMiniGame1Won :
		Amber: Alors George. Au vu de tes performances récentes chez Cosmic Drive, j'ai le plaisir de t'annoncer... que tu vas pouvoir participer à une formation longue durée dans la maintenance de réseaux électriques, entièrement financée par Cosmic Drive !
		George: Pardon !?
		Amber: Je n'ai pas le choix George. Tu n'es pas assez performant dans ton travail, et ça commence à nuire à l'entreprise. Je suis obligé de faire quelque chose. Tu as de la chance que je t'aime bien, sinon ça aurait été la porte direct.
		George: Il y a sûrement une alternative, Amber. Je peux m'améliorer, j'ai juste besoin de...
		Amber: Non George, il n'y en a pas. Soit tu suis cette formation, soit tu vas voir ailleurs. Je conseille la formation personnellement : tu pourras retrouver ton poste d'ici quelques mois, un an max, alors que tu auras bien du mal à trouver un job aussi bien que ce que tu as ici autre part.
		J'essaie de trouver un contre-argument, quelque chose à lui répondre, mais honnêtement sa proposition est plus qu'honnête. Je bénéficie d'une formation gratuite, et si je comprends bien ce qu'elle dit je devrais pouvoir récupérer mon poste sans problème après. C'est difficile de trouver une raison de refuser...
		George: D'accord Amber, je vais suivre cette formation. Et je suis reconnaissant pour l'opportunité.
		Amber: Parfait ! Tu peux prendre le reste de la journée pour faire ce que tu veux, ranger des affaires ou appeler des gens. La formation se passe à Lorient, donc tu risques pas de revenir avant un moment. Je t'enverrai toutes les infos demain.
		George: Je vo...
		Amber: Ah et dit à Michael de venir me voir. Je dois lui dire qu'il va prendre ta place. Au moins temporairement.
		George: ...Bien sûr. J'y vais immédiatement.
		Je lâche un soupir en quittant le bureau. 
		Une formation ? Je suppose que ça pourrait être pire. Le plus ennuyant dans cette histoire, c'est que je doive quitter la vallée, mais je n'ai pas trop le choix si je veux garder un job. 
		Il va falloir prendre son mal en patience...
		-> END // bad end 2, en formation
}
Amber: Alors George. Au vu de tes performances récentes chez Cosmic Drive, j'ai le plaisir de t'annoncer... que tu vas recevoir une promotion !
George: Pardon !?
Je m'attendais à beaucoup de choses en arrivant ici, mais pas à ça. Je pensais que j'avais fait une faute quelque part sans m'en rendre compte, que j'allais être réprimandé, mais on dirait bien que c'est tout l'inverse !
Amber: Pourquoi t'as l'air aussi surpris ? Tu fais du travail exemplaire : nos opérations dans la vallée roulent comme sur des roulettes en grande partie grâce à toi ! 
Amber: Bref, d'ici peu, tu vas commencer à gérer une équipe. Ta place dans l'entreprise ne va pas vraiment changer en esprit, mais au lieu de tout faire tout seul tu auras maintenant des subordonnées à tes côtés.
George: Ça a l'air fantastique dit comme ça, mais on risque pas de se marcher sur les pieds ? Je suis parfaitement capable de remplir mes responsabilités tout seul.
Amber: Pour l'instant ! Mais la ville s'étend chaque jour un peu plus, et la demande augmente avec. On a aussi commencé la construction de la centrale nucléaire il n'y a pas longtemps, et une fois finie tu auras absolument besoin d'une équipe pour tout gérer. Autant la former maintenant pour être sûr qu'il n'y ait pas de problème quand on en a vraiment besoin.
George: Je vois. C'est vrai que vu sous cet angle, c'est logique.
Amber: C'est un peu un pari sur l'avenir si l'on veut, pas vrai ? Allez, étant la patronne extraordinaire que je suis, tu as le reste de la journée libre pour réfléchir à qui tu veux dans ton équipe et pour célébrer ta promotion. Amuse toi bien, va boire un coup au bar pour moi ou un truc du genre !
* [C'est ce que je compte faire !]
	Je me lève de mon fauteuil et me dirige vers la porte.
	Amber: Essaie de pas trop t'amuser quand même, tu vas faire des jaloux.
	George: Je ne promets rien !
	Je me dépêche de quitter les locaux de Cosmic Drive et me dirige vers le café de Gérard. J'y croise là bas Benoît, que je n'avais pas vu depuis un bon bout de temps : on discute, on boit, on rigole, on se raconte nos vies...
	Y'a pas à dire, la vie est belle.
-> CHAPTER_4_CD
* [Vous pourriez venir le boire vous même.]
    C'est la première fois que je vois Amber rester silencieuse si longtemps : six secondes, un record !
    Amber: ...Pardon ?
    George: Je disais juste que vous pourriez venir fêter ma promotion avec moi. J'aimerais apprendre à mieux vous connaître, et se poser dans un café bondé pour boire un cocktail trop cher pour ce que c'est me semble une bonne occasion pour le faire.
    Peut être que je n'aurais rien dû dire. C'est facile de l'oublier, mais Amber reste ma patronne. J'espère que cette histoire ne va pas mal tourner, ce serait bête de perdre mon job juste après avoir reçu une promotion.
    Heureusement on dirait que je n'ai pas de soucis à me faire.
    Amber:”J'aimerais bien, mais j'ai encore plein de travail à faire aujourd'hui. Je dois absolument finir d'écrire le rapport sur notre production du dernier mois.”
    George:”Ah.”
    Amber:”Ouaip.”
    George:”...Bon bah... C'est pas grave, une autre fois alors! Je vous laisse heu... finir ça.”
    Amber:”Ouais. A demain George.”
    George:”Ahem. A demain.”
    Je quitte rapidement le bureau et les locaux de Cosmic Drive. Mon Dieu c'était gênant!
    Bon c'est pas grave, ça aurait pu être pire. Au moins elle a pas l'air de l'avoir mal pris. On va faire comme si rien ne s'était passé.
    Seul, je me dirige vers le café de Gérard pour boire un coup et oublier.
    /
    George: Ah je vois, c'est dom- attendez... le rapport de production du dernier mois? Mais... je vous l'ai envoyé par mail il y a 3 jours??”
    Amber: Aaah?
    George: Oui, j'avais du temps libre la semaine dernière donc je l'ai fait et je vous l'ai envoyé par mail. Je suis même passé vous voir après pour vous dire que je l'avais fait!”
    Amber: ...
    George ...
    ...
    Amber: Du coup! On disait qu'on allait boire un verre ensemble! Allez c'est parti! Donne moi juste 5 minutes pour ranger 2-3 trucs et récupérer mon manteau et on y va! Ouais ouais ouais!”
    George: D'accord, je... Je vais attendre dehors.
    Je sors rapidement du bureau. Je savais qu'Amber était.... tête en l'air... mais à ce point...
    Wow.
    Une dizaine de minutes plus tard, alors que je commençais à me demander si je devais retourner la chercher, Amber arrive enfin et on se dirige vers le café de Gérard.
    Honnêtement, on passe une plutôt bonne soirée ensemble. Je n'en apprends pas vraiment plus sur elle, mais ce n'est pas grave : passer du temps avec Amber est très drôle (même si elle ne le fait pas exprès la plupart du temps).
    Et puis bon, ça me donnera une excuse pour la réinviter...
    ~ georgeRelationAmber = true
    -> CHAPTER_4_CD

=== CHAPTER_4_CD ===
// timeskip
Cela fait maintenant 8 ans que je travaille chez Cosmic Drive. En regardant la mégapole de plus d'un million d'habitants s'étendre à travers toute la vallée, personne ne pourrait penser qu'il n'y avait presque rien il n'y a même pas 10 ans. Le petit village de Vitry-la-Vallée est devenu une agglomération capable de rivaliser avec les plus grandes capitales du monde, et je ne peux pas m'empêcher de me sentir un peu fier en me disant que j'ai joué un rôle là dedans. Cette réussite est liée en grande partie à la nouvelle centrale nucléaire, dont la construction s'est achevée l'année dernière. Avec une capacité maximale de production de 5 TWh par an, l'autonomie énergétique de Vitry-la-Vallée est assurée pour les décennies à venir.
La ville n'est pas la seule chose qui s'est étendue ces dernières années. Cosmic Drive exploite la quasi-totalité du Copium 226, et a même investi dans beaucoup d'autres entreprises dans la vallée. De nos jours, il est rare de trouver un business dans la région qui n'est pas lié de près ou de loin à Cosmic Drive.
{ 
    - georgeRelationAmber:
        D'ailleurs, après s'être tournés autour pendant un moment, Amber et moi nous sommes mis ensembles il y a quelques années. On m'a toujours dit que ce n'était pas une bonne idée de mélanger vie amoureuse et vie professionnelle, mais Amber est tout sauf professionnelle dans sa vie donc les choses se passent plutôt bien entre nous.
}
En plus, il y a quelques mois, le Lorient a présenté à la communauté internationale des preuves irréfutables qu'elle possède bien la vallée de Vitry, et que les revendications du Fanighastan sont totalement infondées. Depuis les entreprises Fanighastanaises se sont lentement retirées de la région, dont Green Horizon qui restait notre principal concurrent même après toutes ces années.
Si on continue sur cette lancée, Cosmic Drive devrait d'ici une ou deux années avoir un monopole total, non seulement sur le Copium 226 mais également sur toutes les entreprises de la vallée. Et difficile de voir ce qui pourrait nous arrêter maintenant !
C'est une autre journée tranquille aujourd'hui : assis à mon bureau, je regarde les allers eretours des membres de mon équipe qui font leur travail, et de temps en temps je jette un oeil à mon panneau de contrôle : tous les voyants de la centrale nucléaire sont au vert, la centrale fonctionne comme un charme, de manière optimale.
Oui, tous les voyants sont au vert. Sauf un.
Je me redresse et regarde mon écran de plus près : le pare-feu de la centrale est actuellement désactivé. Nous sommes actuellement sans défense contre une attaque informatique extérieure.
Marion, l'une des membres de mon équipe se dirige vers moi d'un air inquiet.
George: Marion, le pare-feu est mort. Qu'est ce qu'il se passe ?
Marion: On ne sait pas George. Ça fait 10 minutes qu'il est désactivé. Au début, on pensait qu'il faisait peut-être une mise à jour ou quelque chose dans ce genre mais on arrive pas à le réactiver.
George: Et tu comptais me le dire quand ? Notre pare-feu ne fait pas juste des mises à jour "comme ça". On est une centrale nucléaire, on a besoin d'un maximum de sécurité, on tourne pas sous Windo... Putain c'est quoi ça encore !
Marion: George ?
Sur mon écran, je vois un autre voyant virer au rouge. Puis un autre. Puis un autre. 
Un par un, tous nos outils de contrôle sont déréglés. Ce n'est pas compliqué de voir ce qu'il se passerait si on les laissait comme ça: il suffirait d'attendre une vingtaine de minutes, trente tout au plus, pour que la température dans le réacteur atteigne un niveau critique. Le cœur rentrerait en fusion à ce moment-là, et rien ne pourrait alors empêcher la centrale d'exploser et de raser l'entièreté de la vallée.
George: Les gars, mon écran est en train de devenir complètement rouge! Est-ce-que vous pouvez faire votre travail avant qu'on explose tous?
Marc: On essaie, mais à chaque fois que je corrige un problème il y en a 2 autres qui arrivent! C'est comme si...
On se faisait attaquer. 
Putain.
C'est pas une coïncidence qu'on ait des problèmes avec le pare-feu. Quelqu'un nous a hacké et essaie de faire exploser la centrale à distance.
George: Faite sonner la sonnerie d'urgence! Je veux que tout le monde s'occupe de redémarrer le pare-feu pour dégager le plus vite possible le hacker de nos systèmes! Je vais à la console principale pour essayer de gagner du temps!
La console principale du réseau, mon ancienne console, est spéciale. Elle a été modifiée pendant la construction de la centrale afin de pouvoir directement diriger la centrale sans passer par le réseau central. L'hacker peut faire ce qu'il veut sur l'autre réseau, mais j'ai en utilisant cette console je peux égaliser les chances. J'avais dû insisté lourdement auprès d'Amber à l'époque, mais on dirait bien que j'ai eu raison.
Alors que je sprint vers mon ancien poste de travail, mon téléphone sonne.
C'est Amber. 
George:Je suis un peu occupé là.
Amber: Je sais, on m'a dit ce qu'il se passe. Je suis en train d'évacuer le plus de personnes possible vers le bunker souterrain. Je t'avais dit que ça allait être utile.
George: Ca fait un partout. Je suis en route vers la console principale. Je pense pouvoir ralentir assez l'attaque pour qu'on ait le temps de redémarrer le pare-feu et reprendre contrôle de la centrale.
Amber: Quoi? Pas question! C'est beaucoup trop dangereux! Ramène ton équipe tout de suite au bunker, si vous vous dépêchez vous pouvez encore y arriver!
George: Ait confiance en nous, on peut encore sauver la vallée!
Amber: George, en tant que patronne, je t'ordonne de quitter les lieux avec ton équipe et de venir au bunker immédiatement!
George: Désolé, mais je ne peux pas faire ça. Tu auras tout le temps que tu voudras pour me virer après que j'ai repris le contrôle de la centrale.
{
    - georgeRelationAmber:
    Amber: George, s'il te plait.
    J'étais sur le point de raccrocher mais, entendant la détresse dans sa voix, je m'arrête au dernier instant.
    George: Amber. Je connais les risques. Je sais qu'il y a une bonne chance que je ne m'en sorte pas si j'y vais. Mais je ne peux pas rester les bras croisés alors qu'il nous reste une chance.
    Amber: Et pourquoi pas? Vitry-la-Vallée vaut vraiment que tu risques autant pour elle? On peut survivre à ça, on peut partir ailleurs, reconstruire notre vie à Lorient. Ma famille nous aidera à repartir du bon pied. Mais on ne peut pas faire ça si tu meurs ici! George, je ...
    George: Tu n'as pas intérêt à me dire que tu es enceinte et que tu attendais le bon moment pour me le dire.
    Malgré la situation, je l'entend ricaner de l'autre côté du téléphone. 
    Amber: Non, t'imagine? Ce serait beaucoup trop cliché. Mais je t'aime George. Je t'aime et je n'ai pas envie de te perdre.
    Un long silence suit sa déclaration.
    Amber: ... George? 
    George: Moi aussi je t'aime...
    * [Très bien, j'arrive au bunker.]
        Amber: Vraiment?
        George: Oui. C'est ce que tu voulais non? Ne paraît pas aussi surprise s'il te plait.
        Amber: Désolé. Dépêche toi d'évacuer avant que tout explose et que tu meurs quand même!
        George: Oui madame, je suis en route!
        ...
        Au final, mon équipe et moi avons évacué la centrale et nous nous sommes réfugiés dans le bunker de Cosmic Drive le plus proche. Peu de temps après notre arrivée, le sol s'est mis à trembler violemment. La centrale venait d'exploser.
        Environ 30% de la population de la vallée a eu le temps d'évacuer ou de se réfugier dans un des nombreux bunker souterrains que Cosmic Drive avait construit pour répondre à une telle situation. Un effort international massif entre Lorient et ses pays alliés a permis notre évacuation totale en quelques semaines. 
        Malheureusement, le reste de la population, plusieurs centaines de milliers de personnes, est morte de l'explosion ou des complications liés à l'exposition aux radiations sur les années qui ont suivi.
        Les retombées radioactives suite à l'explosion ont complètement recouvert la vallée. Personne ne peut s'en approcher, et l'exploitation du copium 226 semble n'être maintenant qu'un lointain souvenir.
        Après l'incident, Amber et moi avons déménagé à Lorient. Nous avons eu un enfant, et je reste à la maison pour m'en occuper pendant qu'Amber travaille dans une des entreprises de son père. 
        Notre relation est un peu au point mort en ce moment. Principalement par ma faute: la culpabilité de ne pas avoir réussi -de ne pas avoir essayé- de sauver la vallée me ronge de l'intérieur et pèse lourdement sur ma conscience. Si on avait pas eu notre gosse on se serait sans doute séparé depuis un moment.
        Mon psy me dit souvent qu'on fait tous des erreurs dans la vie, et que l'important est d'apprendre à vivre avec. Je ne sais pas si j'arriverai un jour à tourner la page sur tout ça. 
        Mais une chose est sur.
        Je ne m'approcherai plus jamais d'une centrale nucléaire. Ni d'une mine. 
        -> END // J'aurais pu faire plus
    
    * [C'est pourquoi je ne peux pas abandonner.]
    	George: Je ne me le pardonnerai jamais si je ne fais pas tout mon possible pour préserver notre vie ici.
    	Amber: ....Tu ne changeras vraiment pas d'avis hein?
    	George: Non, désolé. J'ai tendance à être un peu une tête de mule des fois.
    	Amber: Je te pardonnerai seulement si tu reviens en vie.
    	George: Si c'est juste ça alors, ça devrait aller.
    	...
    	Je suis arrivé à la console.
    	Amber: ... Bonne chance.
    	Je raccroche le téléphone et me dirige vers la console principale. 
	    Le moment décisif approche, j'ai pas intérêt à me planter. Toute la vallée repose sur moi.
    	-> MINIGAME_4_CD
}

Je raccroche le téléphone et me dirige vers la console principale. 
Le moment décisif approche, j'ai pas intérêt à me planter. Toute la vallée repose sur moi.
-> MINIGAME_4_CD

=== MINIGAME_4_CD ===
-> CHAPTER_5_CD

=== CHAPTER_5_CD ===

{ 
    - isMiniGame4Won: 
        Après un long duel entre George et le hacker, la centrale fut sauvée. George raconta l'attaque du hacker à l'armée du Lorient, responsable de l'enquête. Malheureusement le hacker avait bien couvert ses traces et il fut impossible de remonter sa trace. La faille qu'il avait utilisée pour attaquer le réseau de la centrale fut corrigée, et la sécurité renforcée de manière générale.
    Cosmic Drive continua d'exploiter le copium 226 et compléta son programme spatial. Une première fusée de test fut envoyée vers Rams, avec à son bord la vieille voiture de George: c'était l'une des choses que George avait demandé en récompense pour avoir sauvé la vallée de Vitry (l'autre étant une bonne grosse médaille).
    Amber et George finirent par se marier et eurent  3 enfants, et ils vécurent le reste de leur vie en paix, plein de réussite et sans aucun risque de catastrophe nucléaire à l'horizon.
    Amber et George gardèrent une relation strictement professionnelle tout au long de leur vie. Cela ne veut pas dire que George était malheureux pour autant: il s'était lié d'amitié avec les membres de son équipe, et ensemble ils firent de Cosmic Drive la plus grande entreprise de la planète (et de Rams aussi).
        -> DONE // Good End 2. Cosmic Drive
    - else :
        Malgré tous ses efforts, George ne parvint pas à empêcher la centrale d'exploser. L'explosion dévasta la région, tuant une grande partie de la population et son équipe qui n'avaient pas encore eu le temps d'évacuer.
        Personne ne sut expliquer ce qu'il s'était passé ce jour fatidique, mais la catastrophe nucléaire de Vitry-la-Vallée fut la pire de l'histoire de l'humanité, relançant de plus belle les débats autour de la sécurité de l'énergie nucléaire et coupant nette l'exploitation du copium 226.
        -> END // Faire empirer les choses en voulant aider
}