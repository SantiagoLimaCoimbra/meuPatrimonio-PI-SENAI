package patrimoniumsenai.apipatrimonium.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import patrimoniumsenai.apipatrimonium.audit.AuditRepository;
import patrimoniumsenai.apipatrimonium.audit.ReadAuditDTO;

import java.util.List;

@RestController
@RequestMapping("audits")
public class AuditController {

    @Autowired
    public AuditRepository repository;

    @GetMapping
    public List<ReadAuditDTO> read(){
        return repository.findAllOrderByDesc().stream().map(ReadAuditDTO::new).toList();
    }

}
