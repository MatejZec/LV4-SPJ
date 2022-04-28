function _lib(_selektor)
{
    this.selektor = _selektor;
    this.el = document.querySelectorAll(this.selektor);
}

_lib.prototype.ubaciElement = function (index, naziv, klasa, indentifikator, tekst)
{
    if (PrazanNaziv(naziv))
    {
        throw("Naziv elementa je obavezan")
    }
    else
    {
        var new_el = document.createElement(naziv);
        new_el.setAttribute("class", klasa);
        new_el.setAttribute("id", indentifikator);
        new_el.innerHTML = tekst;
        this.el[index].appendChild(new_el);
        /*this.el.setAttribute("class", klasa);
        this.el.setAttribute("id", indentifikator);*/
    }
}

_lib.prototype.dodajKlasu = function(klasa)
{
    this.el.forEach((value)=>
    {
        value.setAttribute("class", klasa);
    });
}

_lib.prototype.dodajAtribut = function(attrName, attrValue)
{
    this.el.forEach((value)=>
    {
        value.setAttribute(attrName, attrValue);
    });
}

_lib.prototype.prikazi = function(Index)
{
    this.el.forEach((value)=>
    {
        this.el[Index].setAttribute("style", "visibility:visible");
    });
}
_lib.prototype.sakrij = function(Index)
{
    this.el.forEach((value)=>
    {
        this.el[Index].setAttribute("style", "visibility:hidden");
    });
}





function PrazanNaziv(naziv)
{
    if (naziv === null || naziv === "")
    {
        return true;
    }
    else
        return false;
}

localStorage.clear();
localStorage.setItem('racunarstvo', 'http://racunarstvo.vuv.hr');
localStorage.setItem('loomen', 'http://loomen.vsmti.hr');
localStorage.setItem('imagine', 'http://e5.onthehub.com/d.ashx?s=ui4qkso06k');
localStorage.setItem('studentski_dom', 'http://studom.vsmti.hr');
localStorage.setItem('office365', 'https://outlook.office365.com/owa/?realm=vsmti.hr#path=/mail');
var linkovi = new _lib(".footer-navigation");
/*for (let i = 0; i < localStorage.length; i++)
{
    //var li = linkovi.ubaciElement(0, localStorage.key(i), "", "", "");
    //var a_element = linkovi[i].createElement(localStorage.key(i), localStorage.getItem(i));
    linkovi.ubaciElement(0, 'li', '', '', localStorage.key(i));
}*/

for(var i = 0; i < localStorage.length; i++)
{
    console.log(localStorage.key(i));
    linkovi.ubaciElement(0, 'li', '', localStorage.key(i) , '');
    var liTag = new _lib(`#${localStorage.key(i)}`);
    liTag.ubaciElement(0, 'a', '', '', localStorage.key(i));
    var atag = new _lib(`#${localStorage.key(i)} a`);
    atag.dodajAtribut('href', localStorage.getItem(localStorage.key(i))); 
}
