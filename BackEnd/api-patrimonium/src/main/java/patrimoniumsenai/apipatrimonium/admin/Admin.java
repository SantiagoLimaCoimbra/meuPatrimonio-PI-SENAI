package patrimoniumsenai.apipatrimonium.admin;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Table(name = "Admin")
@Entity(name = "Admin")
@Getter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(of = "id")
public class Admin {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String email;
    private String cpf;
    private String password;

    //private Boolean ativo;

    public Admin(CreateAdminDTO data) {
        this.name = data.name();
        this.email = data.email();
        this.cpf = data.cpf();
        this.password = data.password();
    }
}
