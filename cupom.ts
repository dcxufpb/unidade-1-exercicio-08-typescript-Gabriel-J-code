import { Loja } from './loja'; 

export function dados_loja_objeto(loja: Loja) {
    if (!loja.nome_loja) {
    throw new Error(`O campo nome da loja é obrigatório`);
  }
	if (!loja.logradouro){
		throw new Error(`O campo logradouro do endereço é obrigatório`)
	}		
	if (!loja.municipio){
		throw new Error(`O campo município do endereço é obrigatório`)
	}
	if (!loja.estado){
		throw new Error(`O campo estado do endereço é obrigatório`)
	} 
	if (!loja.cnpj){
		throw new Error(`O campo CNPJ da loja é obrigatório`)
	} 
	if (!loja.inscricao_estadual){
		throw new Error(`O campo inscrição estadual da loja é obrigatório`)
	}
	var _numero = (!loja.numero)? "s/n" : String(loja.numero)
	
	var _complemento = (loja.complemento)? " " + loja.complemento : ""	

	var _bairro = (loja.bairro)? loja.bairro + " - " : ""

	var _cep = (loja.cep)? "CEP:" + loja.cep : ""
	
	var _telefone = (loja.telefone)? "Tel " + loja.telefone : ""
	
	_telefone = ( loja.cep && loja.telefone)? " " + _telefone : _telefone

	var _observacao = (loja.observacao)? loja.observacao : ""

	var nota = `${loja.nome_loja}\n`
	nota += `${loja.logradouro}, ${_numero}${_complemento}\n`
	nota += `${_bairro}${loja.municipio} - ${loja.estado}\n`
	nota += `${_cep}${_telefone}\n`
	nota += `${_observacao}\n`
	nota += `CNPJ: ${loja.cnpj}\n`
	nota += `IE: ${loja.inscricao_estadual}\n`

	return nota;
}
