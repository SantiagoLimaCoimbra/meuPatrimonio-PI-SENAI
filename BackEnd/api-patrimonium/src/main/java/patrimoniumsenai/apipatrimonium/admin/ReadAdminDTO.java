package patrimoniumsenai.apipatrimonium.admin;

public record ReadAdminDTO(String cpf, String password) {

    public ReadAdminDTO(Admin admin){
        this(admin.getCpf(), admin.getPassword());
    }

}
