/*package patrimoniumsenai.apipatrimonium.area;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import patrimoniumsenai.apipatrimonium.employee.Employee;

import java.util.List;

@Table(name = "Area")
@Entity(name = "Area")
@Getter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(of = "id_area")
public class Area {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id_area;
    private String name_area;
    private String description_area;

    //mane to one
    @ManyToOne
    @JoinColumn(name = "id_employee")
    private List<Employee> employees;

}
*/