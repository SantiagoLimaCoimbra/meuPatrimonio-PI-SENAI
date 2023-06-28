package patrimoniumsenai.apipatrimonium.admin;

public record ReadAdminDTO(Long id, String name, String email, String cpf, String password) {

    public ReadAdminDTO(Admin admin){
        this(admin.getId(), admin.getName(), admin.getEmail(), admin.getCpf(), admin.getPassword());
    }

}
