package patrimoniumsenai.apipatrimonium.employee;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Table(name = "Employee")
@Entity(name = "Employee")
@Getter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(of = "id_employee")
public class Employee {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id_employee;
    private String name_employee;
    private String cpf;
    private String email;

    @Enumerated(EnumType.STRING)
    private Position position;

    public Employee(CreateEmployeeDTO data){
        this.name_employee = data.name_employee();
        this.cpf = data.cpf();
        this.email = data.email();
        this.position = data.position();
    }

    public void updateInfo(UpdateEmployeeDTO data){
        if (data.name_employee() != null){
            this.name_employee = data.name_employee();
        }
        if (data.cpf() != null){
            this.cpf = data.cpf();
        }
        if (data.email() != null){
            this.email = data.email();
        }
        if (data.position() != null){
            this.position = data.position();
        }
    }

}
