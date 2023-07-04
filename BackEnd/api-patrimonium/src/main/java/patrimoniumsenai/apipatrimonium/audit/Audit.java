package patrimoniumsenai.apipatrimonium.audit;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.io.Serializable;
import java.time.LocalDate;

@Entity(name = "Audit")
@Table(name = "audit")//maiusuco?
@Getter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(of = "id_audit")
public class Audit implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id_audit;

    @NotNull
    @Column(name = "entity", nullable = false)
    private String entity;

    @NotNull
    @Column(name = "operation", nullable = false)
    private String operation;

    @NotNull
    @Column(name = "modified_by", nullable = false)
    private String modifiedBy;

    @NotNull
    @Column(name = "modified_at", nullable = false)
    private LocalDate modifiedAt;

    public Audit(AuditDTO data){
        this.entity = data.entity();
        this.operation = data.operation();
        this.modifiedBy = data.modifiedBy();
        this.modifiedAt = data.modifiedAt();
    }
}
