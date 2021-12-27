           let win1;
           function firstWindow() {
                win1 = window.open("","Сырники1","left = 300, top = 300, width = 600, height = 600");
            }
            function secondWindow() {
                win2 = window.open("", "Сырники2", "left = 300, top = 300. width = 600, height = 600");
            }
            function closeFirstWindow() {
                win1.close();
            }
            function closeSecondWindow() {
                win2.close()
            }
            function firstRecipe() {
                win1.document.write("Классические сырники - что может быть лучше на завтрак? Да еще со сметанкой или вареньем... Думаю, вам подойдет этот рецепт сырников.\
                Творог - 500 г\
                Мука - 0,5-0,75 стакана\
                Яйца - 1 шт.\
                Сахар - 2 ст. ложки\
                Масло (желательно топленое) - 20-30 г\
                Соль - 0,25 ч. ложки");
            }
            function secondRecipe() {
                win2.document.write("Вкусные, аппетитные и полезные сырники! Творог (жирностью 9%) - 400 г\
                Яйца - 1-2 шт.\
                Сахар - 3-4 ст. л.\
                Соль - 1 щепотка\
                Мука - 3 ст. л.\
                Ванильный сахар - 1 пакетик\
                Масло растительное - для жарки");
            }