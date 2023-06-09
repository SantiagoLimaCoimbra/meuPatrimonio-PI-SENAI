package patrimoniumsenai.apipatrimonium.controller;

import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.kafka.KafkaProperties;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import patrimoniumsenai.apipatrimonium.admin.Admin;
import patrimoniumsenai.apipatrimonium.admin.DataAuthenticationDTO;
import patrimoniumsenai.apipatrimonium.infra.security.DataTokenJWT_DTO;
import patrimoniumsenai.apipatrimonium.infra.security.TokenService;

@RestController
@RequestMapping("/login")
public class AuthenticationController {

    @Autowired
    private AuthenticationManager manager;

    @Autowired
    private TokenService tokenService;

    @PostMapping
    public ResponseEntity execultLogin(@RequestBody @Valid DataAuthenticationDTO data){
        var authenticationToken = new UsernamePasswordAuthenticationToken(data.cpf(), data.password());
        var authentication = manager.authenticate(authenticationToken);

        var tokenJWT = tokenService.generateToken((Admin) authentication.getPrincipal());

        return ResponseEntity.ok(new DataTokenJWT_DTO(tokenJWT));
    }

}
