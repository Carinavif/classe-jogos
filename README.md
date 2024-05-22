# 🛡️ Projeto de Herói em JavaScript

Este projeto em JavaScript define uma classe de herói com atributos de nome, idade e classe. Além disso, inclui um método que simula o ataque do herói com base em sua classe.

## 📄 Visão Geral

O projeto consiste em:
1. Definição de uma classe `Hero` que aceita nome, idade e classe do herói.
2. Implementação de um método `atacar` que exibe uma mensagem de ataque baseada na classe do herói.
3. Criação de uma instância da classe `Hero` e execução do método `atacar`.

## 🔍 Estrutura do Código

### 📂 Classe `Hero`

- **Construtor**:
  - `nameHero`: O nome do herói.
  - `ageHero`: A idade do herói.
  - `classHero`: A classe do herói (ex: mage, warrior, ninja, monk).

- **Método `atacar`**:
  - Determina o tipo de ataque baseado na classe do herói.
  - Exibe uma mensagem no console descrevendo o ataque.

### 📜 Código

```javascript
class Hero {
    constructor(nameHero, ageHero, classHero) {
        this.nameHero = nameHero;
        this.ageHero = ageHero;
        this.classHero = classHero;
    }

    atacar() {
        let classHero = "";
        let attackHero = "";

        if (this.classHero === "mage") {
            classHero = "Mage";
            attackHero = "magia.";
        } else if (this.classHero === "warrior") {
            classHero = "Warrior";
            attackHero = "espada.";
        } else if (this.classHero === "ninja") {
            classHero = "Ninja";
            attackHero = "shuriken.";
        } else {
            classHero = "Monk";
            attackHero = "artes marciais.";
        }
        console.log(`O herói de nome ${this.nameHero}, de idade ${this.ageHero}, da classe ${classHero}, atacou usando ${attackHero}`);
    }
}

let nameHero = "Sebastião";
let ageHero = 30;
let classHero = "monk";

let myHero = new Hero(nameHero, ageHero, classHero);

myHero.atacar();
``` 

## 🛠 Uso

Para usar o script:

1. **Defina os atributos do herói**: Nome, idade e classe.
2. **Crie uma instância da classe `Hero`**: Passe os atributos definidos para o construtor da classe.
3. **Chame o método `atacar`**: Execute o método para ver a mensagem de ataque no console.

### Exemplo de Saída

`O herói de nome Sebastião, de idade 30, da classe Monk, atacou usando artes marciais.`
