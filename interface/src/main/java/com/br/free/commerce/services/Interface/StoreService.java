package com.br.free.commerce.services.Interface;

import com.br.free.commerce.to.CadastrarLojaTO;
import com.free.commerce.entity.Cliente;
import com.free.commerce.entity.Loja;
import com.free.commerce.entity.UserLogin;
import org.springframework.web.multipart.MultipartFile;

/**
 * Created by pc on 19/03/2016.
 */
public interface StoreService {

    UserLogin cadastrar(CadastrarLojaTO form);

    void alterarPerfil(Long lojaId, MultipartFile file);

    Loja buscarLoja(Long id);
}
