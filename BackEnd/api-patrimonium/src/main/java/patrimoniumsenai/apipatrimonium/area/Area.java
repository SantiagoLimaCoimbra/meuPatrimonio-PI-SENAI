package patrimoniumsenai.apipatrimonium.area;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import patrimoniumsenai.apipatrimonium.employee.Employee;


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

    @OneToOne
    @JoinColumn(name = "id_employee")
    private Employee employee;

    /*
    //mane to one
    @OneToMany
    @JoinColumn(name = "id_employee")
    private List<Employee> employees;
     */

    public Area(CreateAreaDTO data){
        this.name_area = data.name_area();
        this.description_area = data.description_area();
        this.employee = data.employee();
    }

    public void updateInfo(UpdateAreaDTO data){
        if (data.name_area() != null){
            this.name_area = data.name_area();
        }
        if (data.description_area() != null){
            this.description_area = data.description_area();
        }
        if (data.employee() != null){
            this.employee = data.employee();
        }
    }

}
