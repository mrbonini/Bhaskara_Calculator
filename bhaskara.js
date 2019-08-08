
            var valorA = document.getElementById("a");
            var valorB = document.getElementById("b");
            var valorC = document.getElementById("c");
            var delta = document.getElementById("valorDelta");
            var const1 = document.getElementById("x1");
            var const2 = document.getElementById("x2");

            valorA = prompt("Informe o valor de A");
            valorB = prompt("Informe o valor de B");
            valorC = prompt("Informe o valor de C");

            a.innerText = "Sendo o valor de A = " + valorA;
            b.innerText = "Sendo o valor de B = " + valorB;
            c.innerText = "Sendo o valor de C = " + valorC;

            delta = (valorB * valorB) - 4 * valorA * valorC
            
            if (delta < 0) {6
                valorDelta.innerText = "O valor de delta é " + delta;
                statusDelta.innerText = "Para delta negativo não há raiz verdadeira";
            }
            else {  
                valorDelta.innerText = "O valor de delta é " + delta;
                statusDelta.innerText = "Para delta positivo há raiz verdadeira";

                const1 = (-valorB + delta) / 2 * valorA;
                const2 = (-valorB - delta) / 2 * valorA;

                x1.innerText = "O valor de X1 é " + const1;
                x2.innerText = "O valor de X2 é " + const2;
            
            };

        