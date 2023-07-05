package patrimoniumsenai.apipatrimonium.infra.security;

public record DataTokenJWT_DTO(String token, Long id, String name, String email, String cpf) {
}
