package patrimoniumsenai.apipatrimonium.controller;

import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import patrimoniumsenai.apipatrimonium.admin.DataAuthenticationDTO;

@RestController
@RequestMapping("/login")
public class AuthenticationController {

    @Autowired
    private AuthenticationManager manager;

    @PostMapping
    public ResponseEntity execultLogin(@RequestBody @Valid DataAuthenticationDTO data){
        var token = new UsernamePasswordAuthenticationToken(data.cpf(), data.password());
        var authentication = manager.authenticate(token);

        return ResponseEntity.ok().build();
    }

}
